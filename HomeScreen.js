import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, spacing, radius, typography, BANK_NAME } from '../theme';

const menuItems = [
  { icon: 'hand-heart-outline', label: 'Donate Relief Fund' },
  { icon: 'cellphone-key', label: 'DigiVault' },
  { icon: 'file-document-outline', label: 'Statement' },
  { icon: 'wallet-outline', label: 'My Accounts' },
  { icon: 'receipt', label: 'Rewards Program' },
  { icon: 'cellphone-arrow-down', label: 'Topup & Data Pack' },
  { icon: 'briefcase-outline', label: 'Load Wallet' },
  { icon: 'chart-line', label: 'My Investments' },
  { icon: 'cash-refund', label: 'Cardless Withdraw' },
  { icon: 'swap-horizontal', label: 'Fund Transfer History' },
  { icon: 'history', label: 'Payment History' },
  { icon: 'face-agent', label: 'Customer Care' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: spacing.xl }}>
          <LinearGradient
            colors={[colors.gradientStart, colors.gradientEnd]}
            style={styles.headerCard}
          >
            <View style={styles.headerTop}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={28} color={colors.gradientStart} />
              </View>
              <View style={{ flex: 1, marginLeft: spacing.md }}>
                <Text style={styles.greeting}>Good Morning!</Text>
                <Text style={styles.userName}>USER NAME</Text>
              </View>
              <Ionicons name="search" size={22} color={colors.white} />
              <Ionicons
                name="notifications-outline"
                size={22}
                color={colors.white}
                style={{ marginLeft: spacing.md }}
              />
            </View>

            <View style={styles.accountRow}>
              <MaterialCommunityIcons name="wallet-outline" size={18} color={colors.white} />
              <Text style={styles.accountLabel}>Horizon Savings Account</Text>
            </View>
            <Text style={styles.accountNumber}>XXXXXXXXXX</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balance}>XXX XXX.XX</Text>
              <Ionicons name="eye-outline" size={18} color={colors.white} />
            </View>

            <TouchableOpacity style={styles.privilegeButton}>
              <Text style={styles.privilegeText}>Learn more about privilege features</Text>
              <Ionicons name="chevron-forward" size={18} color={colors.black} />
            </TouchableOpacity>
          </LinearGradient>

          <Text style={styles.sectionTitle}>Transaction Summary of Last 7 days</Text>
          <View style={styles.summaryRow}>
            <TouchableOpacity style={styles.summaryButton}>
              <Text style={styles.summaryText}>Show Graph</Text>
              <Ionicons name="chevron-down" size={16} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.summaryButton}>
              <Text style={styles.summaryText}>Recent Transactions</Text>
              <Ionicons name="chevron-down" size={16} color={colors.white} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuGrid}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.label}
                style={styles.menuItem}
                onPress={() => {
                  if (item.label === 'My Accounts') navigation.navigate('Payment');
                }}
              >
                <MaterialCommunityIcons name={item.icon} size={28} color={colors.gradientStart} />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={styles.tabBar}>
          <TabItem icon="home" label="Home" active />
          <TabItem icon="credit-card-outline" label="Payments" />
          <TouchableOpacity
            style={styles.scanFab}
            onPress={() => navigation.navigate('QRScan')}
          >
            <MaterialCommunityIcons name="qrcode-scan" size={26} color={colors.white} />
          </TouchableOpacity>
          <TabItem icon="send-outline" label="Send Money" />
          <TabItem icon="dots-horizontal" label="More" />
        </View>
      </SafeAreaView>
    </View>
  );
}

function TabItem({ icon, label, active }) {
  return (
    <View style={styles.tabItem}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={active ? colors.primaryGreen : colors.gray}
      />
      <Text style={[styles.tabLabel, active && { color: colors.primaryGreen }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerCard: {
    margin: spacing.md,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  headerTop: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: { ...typography.small, color: colors.white },
  userName: { ...typography.h2, color: colors.white },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  accountLabel: { ...typography.body, color: colors.white, marginLeft: spacing.xs },
  accountNumber: { ...typography.body, color: colors.white, marginTop: spacing.xs, letterSpacing: 1 },
  balanceRow: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.xs },
  balance: { ...typography.h1, color: colors.white, marginRight: spacing.sm },
  privilegeButton: {
    backgroundColor: colors.white,
    borderRadius: radius.pill,
    marginTop: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  privilegeText: { ...typography.body, fontWeight: '700', color: colors.black, flex: 1 },
  sectionTitle: {
    ...typography.h2,
    fontSize: 17,
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  summaryButton: {
    flex: 1,
    backgroundColor: colors.primaryGreen,
    borderRadius: radius.sm,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  summaryText: { color: colors.white, fontWeight: '700' },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
  },
  menuItem: { width: '25%', alignItems: 'center', marginBottom: spacing.lg, paddingHorizontal: 4 },
  menuLabel: { ...typography.small, textAlign: 'center', marginTop: spacing.xs },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: spacing.sm,
    backgroundColor: colors.white,
  },
  tabItem: { alignItems: 'center' },
  tabLabel: { ...typography.small, color: colors.gray, marginTop: 2 },
  scanFab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
    borderWidth: 4,
    borderColor: colors.white,
  },
});
