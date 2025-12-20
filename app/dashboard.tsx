import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Colors } from '../constants/Colors';
import { 
  LogOut, 
  CheckSquare, 
  Clock, 
  Users, 
  UserCheck, 
  ClipboardList, 
  Truck, 
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  BarChart3,
  FileText
} from 'lucide-react-native';

export default function DashboardScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const role = params.role || 'engineer';
  const projectName = params.projectName || 'Prestige Heights Tower A';

  const isManager = role === 'manager';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.projectTitle}>{projectName}</Text>
          <Text style={styles.dateText}>Friday, 19 December 2025</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.dismissAll()}>
          <LogOut size={20} color={Colors.text.secondary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconBox}>
              <CheckSquare size={20} color={Colors.text.primary} />
            </View>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIconBox, { backgroundColor: Colors.primaryLight }]}>
              <Clock size={20} color={Colors.primary} />
            </View>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconBox}>
              <Users size={20} color={Colors.text.primary} />
            </View>
            <Text style={styles.statValue}>48</Text>
            <Text style={styles.statLabel}>Workers</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>{isManager ? 'Management Tools' : 'Quick Actions'}</Text>
        <View style={styles.actionsContainer}>
          
          {isManager ? (
            // Manager Actions
            <>
              <TouchableOpacity 
                style={styles.actionCard} 
                onPress={() => router.push('/analytics')}
              >
                <View style={[styles.actionIcon, { backgroundColor: Colors.primary }]}>
                  <BarChart3 size={24} color={Colors.white} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Analytics Dashboard</Text>
                  <Text style={styles.actionDesc}>Project insights</Text>
                </View>
                <ChevronRight size={20} color={Colors.text.light} />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => router.push({ pathname: '/material', params: { role: 'manager' } })}
              >
                <View style={[styles.actionIcon, { backgroundColor: Colors.primary }]}>
                  <Truck size={24} color={Colors.white} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Approve Materials</Text>
                  <Text style={styles.actionDesc}>3 pending approvals</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
                <ChevronRight size={20} color={Colors.text.light} />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => router.push('/invoicing')}
              >
                <View style={[styles.actionIcon, { backgroundColor: Colors.primary }]}>
                  <FileText size={24} color={Colors.white} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Invoicing & Billing</Text>
                  <Text style={styles.actionDesc}>GST-ready invoices</Text>
                </View>
                <ChevronRight size={20} color={Colors.text.light} />
              </TouchableOpacity>
            </>
          ) : (
            // Engineer Actions
            <>
              <TouchableOpacity 
                style={styles.actionCard} 
                onPress={() => router.push('/attendance')}
              >
                <View style={[styles.actionIcon, { backgroundColor: Colors.primary }]}>
                  <UserCheck size={24} color={Colors.white} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Mark Attendance</Text>
                  <Text style={styles.actionDesc}>GPS-based check-in</Text>
                </View>
                <ChevronRight size={20} color={Colors.text.light} />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => router.push('/dpr/step1')}
              >
                <View style={[styles.actionIcon, { backgroundColor: Colors.primary }]}>
                  <ClipboardList size={24} color={Colors.white} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Daily Progress Report</Text>
                  <Text style={styles.actionDesc}>Submit today's work</Text>
                </View>
                <ChevronRight size={20} color={Colors.text.light} />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionCard}
                onPress={() => router.push({ pathname: '/material', params: { role: 'engineer' } })}
              >
                <View style={[styles.actionIcon, { backgroundColor: Colors.primary }]}>
                  <Truck size={24} color={Colors.white} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Material Request</Text>
                  <Text style={styles.actionDesc}>Request materials</Text>
                </View>
                <ChevronRight size={20} color={Colors.text.light} />
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Today's Alerts */}
        <Text style={styles.sectionTitle}>Today's Alerts</Text>
        <View style={styles.alertsContainer}>
          <View style={[styles.alertCard, { backgroundColor: Colors.primaryLight, borderColor: '#FFD6A7' }]}>
            <View style={styles.alertIcon}>
              <AlertCircle size={20} color={Colors.primary} />
            </View>
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>Material Delivery Delayed</Text>
              <Text style={styles.alertDesc}>Cement delivery postponed to tomorrow</Text>
            </View>
          </View>

          <View style={[styles.alertCard, { backgroundColor: Colors.secondary, borderColor: Colors.border }]}>
            <View style={styles.alertIcon}>
              <CheckCircle2 size={20} color={Colors.text.primary} />
            </View>
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>DPR Submitted Successfully</Text>
              <Text style={styles.alertDesc}>Yesterday's report approved</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  projectTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.text.primary,
  },
  dateText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  logoutButton: {
    padding: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
  },
  scrollContent: {
    padding: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statIconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: Colors.text.primary,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.text.primary,
    marginBottom: 16,
  },
  actionsContainer: {
    gap: 16,
    marginBottom: 32,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
  },
  actionDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  badge: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  badgeText: {
    color: Colors.primary,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
  },
  alertsContainer: {
    gap: 12,
    paddingBottom: 20,
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  alertIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: Colors.text.primary,
  },
  alertDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
    marginTop: 2,
  },
});
