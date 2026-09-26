import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, spacing, radius, typography } from '../theme';

export default function PaymentScreen({ navigation }) {
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.header}
      >
        <SafeAreaView>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>PAYEE NAME</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <View style={styles.card}>
        <Text style={styles.label}>Paying To</Text>
        <View style={styles.payeeRow}>
          <View style={styles.payeeIcon}>
            <MaterialCommunityIcons name="storefront-outline" size={22} color={colors.gradientStart} />
          </View>
          <View style={{ marginLeft: spacing.md }}>
            <Text style={styles.payeeName}>PAYEE NAME</Text>
            <Text style={styles.payeeId}># XXXXXXXXXXXXXXXX</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>From Account</Text>
        <TouchableOpacity style={styles.accountBox}>
          <View style={{ flex: 1 }}>
            <View style={styles.rowBetween}>
              <Text style={styles.accountBalance}>XXX XXX.XX</Text>
              <View style={styles.primaryBadge}>
                <Text style={styles.primaryBadgeText}>Primary</Text>
              </View>
            </View>
            <Text style={styles.accountType}>Horizon Savings Account</Text>
            <Text style={styles.accountNumber}>XXXXXXXXXX</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.gray} />
        </TouchableOpacity>

        <Text style={[styles.label, { marginTop: spacing.lg }]}>Amount</Text>
        <View style={styles.inputBox}>
          <Text style={styles.currency}>NPR</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0.00"
            placeholderTextColor={colors.gray}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <Text style={[styles.label, { marginTop: spacing.lg }]}>Remarks</Text>
        <View style={styles.remarksBox}>
          <TextInput
            style={styles.remarksInput}
            value={remarks}
            onChangeText={setRemarks}
            placeholder=""
          />
        </View>

        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedText}>Proceed</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingBottom: spacing.lg },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    gap: spacing.md,
  },
  headerTitle: { ...typography.h2, color: colors.white },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  label: { ...typography.body, color: colors.gray, marginBottom: spacing.sm },
  payeeRow: { flexDirection: 'row', alignItems: 'center' },
  payeeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payeeName: { ...typography.h2, fontSize: 18 },
  payeeId: { ...typography.small, color: colors.gray, marginTop: 2 },
  accountBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  accountBalance: { ...typography.h2, fontSize: 18 },
  accountType: { ...typography.body, marginTop: spacing.xs },
  accountNumber: { ...typography.small, color: colors.gray, marginTop: 2 },
  primaryBadge: {
    backgroundColor: colors.primaryGreen,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  primaryBadgeText: { color: colors.white, ...typography.small, fontWeight: '700' },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  currency: { ...typography.body, fontWeight: '700', marginRight: spacing.sm },
  amountInput: { flex: 1, ...typography.body },
  remarksBox: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    minHeight: 48,
    paddingHorizontal: spacing.md,
  },
  remarksInput: { flex: 1, ...typography.body },
  proceedButton: {
    backgroundColor: colors.primaryGreen,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  proceedText: { ...typography.button, color: colors.white },
  cancelText: {
    ...typography.body,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: spacing.md,
  },
});
