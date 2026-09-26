import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, spacing, radius, typography } from '../theme';

export default function QRScanScreen({ navigation }) {
  const [mode, setMode] = useState('scan'); // 'scan' | 'share'
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarcodeScanned = ({ data }) => {
    if (scanned) return;
    setScanned(true);
    Alert.alert('QR Code Scanned', data, [
      { text: 'OK', onPress: () => setScanned(false) },
    ]);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Scan Or Share</Text>
          <View style={{ width: 22 }} />
        </View>
      </SafeAreaView>

      <View style={styles.toggleRow}>
        <TouchableOpacity
          style={[styles.toggleButton, mode === 'scan' && styles.toggleActive]}
          onPress={() => setMode('scan')}
        >
          <Text style={[styles.toggleText, mode === 'scan' && styles.toggleActiveText]}>
            Scan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, mode === 'share' && styles.toggleActive]}
          onPress={() => setMode('share')}
        >
          <Text style={[styles.toggleText, mode === 'share' && styles.toggleActiveText]}>
            Share
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cameraArea}>
        {mode === 'scan' && hasPermission ? (
          <CameraView
            style={StyleSheet.absoluteFillObject}
            onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
          />
        ) : (
          <View style={[StyleSheet.absoluteFillObject, styles.cameraPlaceholder]}>
            <Text style={styles.placeholderText}>
              {mode === 'scan' ? 'Camera permission needed' : 'Your QR code appears here'}
            </Text>
          </View>
        )}

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="flash-off-outline" size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="image-outline" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.caption}>
        {mode === 'scan' ? 'Scan to Pay on Merchant outlets' : 'Share your QR to receive payments'}
      </Text>

      <View style={styles.footerLogos}>
        <MaterialCommunityIcons name="cellphone-nfc" size={18} color={colors.white} />
        <Text style={styles.footerText}>Interoperable QR Payments</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.gradientStart,
  },
  headerTitle: { ...typography.h2, color: colors.white },
  toggleRow: {
    flexDirection: 'row',
    margin: spacing.md,
    backgroundColor: '#20242A',
    borderRadius: radius.pill,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: radius.pill,
  },
  toggleActive: { backgroundColor: colors.white },
  toggleText: { color: colors.white, fontWeight: '700' },
  toggleActiveText: { color: colors.primaryGreen },
  cameraArea: {
    flex: 1,
    margin: spacing.md,
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  cameraPlaceholder: { alignItems: 'center', justifyContent: 'center' },
  placeholderText: { color: colors.white, ...typography.body },
  iconRow: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    ...typography.h2,
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  footerLogos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingBottom: spacing.xl,
  },
  footerText: { color: colors.white, ...typography.small },
});
