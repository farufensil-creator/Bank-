import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, spacing, radius, typography, BANK_NAME } from '../theme';

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Replace with real auth call
    navigation.replace('Home');
  };

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.topBar}>
            <Ionicons name="calendar-outline" size={24} color={colors.white} />
            <Text style={styles.bankName}>{BANK_NAME}</Text>
            <Ionicons name="notifications-outline" size={24} color={colors.white} />
          </View>

          <View style={styles.card}>
            <Text style={styles.greeting}>
              Good Morning, <Text style={styles.greetingBold}>USER</Text>
            </Text>

            <View style={styles.inputWrapper}>
              <Ionicons name="phone-portrait-outline" size={20} color={colors.gray} />
              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor={colors.gray}
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color={colors.gray} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={colors.gray}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={colors.gray}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.rememberRow}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
              <Text style={styles.rememberText}>Remember Me</Text>
            </TouchableOpacity>

            <View style={styles.loginRow}>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fingerprintButton} onPress={handleLogin}>
                <MaterialCommunityIcons name="fingerprint" size={26} color={colors.white} />
              </TouchableOpacity>
            </View>

            <View style={styles.linkRow}>
              <Text style={styles.linkText}>Register/Activate</Text>
              <Text style={styles.linkDivider}> or </Text>
              <Text style={styles.linkText}>Forgot Password</Text>
            </View>

            <Text style={[styles.linkText, styles.centerLink]}>Block Mobile Banking</Text>
            <Text style={[styles.linkText, styles.centerLink, styles.underline]}>
              Need Help?
            </Text>
          </View>

          <View style={styles.quickRow}>
            {[
              { icon: 'shield-check-outline', label: 'DigiVault' },
              { icon: 'gift-outline', label: 'Smart Offers' },
              { icon: 'calculator-variant-outline', label: 'EMI Calculator' },
              { icon: 'currency-usd', label: 'Forex' },
            ].map((item) => (
              <View key={item.label} style={styles.quickItem}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={26}
                  color={colors.primaryGreen}
                />
                <Text style={styles.quickLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingBottom: spacing.xl },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  bankName: { ...typography.h2, color: colors.white },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.md,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  greeting: { ...typography.h1, textAlign: 'center', marginBottom: spacing.lg },
  greetingBold: { fontWeight: '800' },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  input: { flex: 1, marginLeft: spacing.sm, ...typography.body, color: colors.black },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: colors.gray,
    borderRadius: 4,
    marginRight: spacing.sm,
  },
  checkboxChecked: { backgroundColor: colors.primaryGreen, borderColor: colors.primaryGreen },
  rememberText: { ...typography.body, color: colors.black },
  loginRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  loginButton: {
    flex: 1,
    backgroundColor: colors.gradientStart,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  loginButtonText: { ...typography.button, color: colors.white },
  fingerprintButton: {
    width: 56,
    backgroundColor: colors.gradientStart,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: spacing.sm },
  linkText: { ...typography.body, fontWeight: '700', color: colors.black },
  linkDivider: { ...typography.body, color: colors.gray },
  centerLink: { textAlign: 'center', marginTop: spacing.sm },
  underline: { textDecorationLine: 'underline' },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
  },
  quickItem: { alignItems: 'center', width: 70 },
  quickLabel: { ...typography.small, textAlign: 'center', marginTop: spacing.xs, color: colors.black },
});
