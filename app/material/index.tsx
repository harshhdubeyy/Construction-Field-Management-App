import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { ArrowLeft, Plus, Check, X } from 'lucide-react-native';

const requests = [
  {
    id: 1,
    material: 'Portland Cement (50kg)',
    quantity: '100 bags',
    requester: 'Ramesh Kumar',
    date: '18 Dec 2025',
    status: 'pending'
  },
  {
    id: 2,
    material: 'TMT Steel Bars (12mm)',
    quantity: '500 kg',
    requester: 'Prakash Singh',
    date: '17 Dec 2025',
    status: 'approved'
  },
  {
    id: 3,
    material: 'River Sand',
    quantity: '5 cubic m',
    requester: 'Suresh Yadav',
    date: '18 Dec 2025',
    status: 'pending'
  }
];

export default function MaterialRequestScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const role = params.role || 'engineer';
  const isManager = role === 'manager';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={20} color={Colors.text.primary} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Material Requests</Text>
            <Text style={styles.headerDesc}>{isManager ? 'Approve requests' : 'Request materials'}</Text>
          </View>
        </View>
        {!isManager && (
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => router.push('/material/new')}
          >
            <Plus size={24} color={Colors.white} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {requests.map((req) => (
          <View key={req.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardInfo}>
                <Text style={styles.materialName}>{req.material}</Text>
                <Text style={styles.quantity}>{req.quantity}</Text>
                <Text style={styles.requester}>Requested by {req.requester} · {req.date}</Text>
              </View>
              <View style={[
                styles.statusBadge, 
                req.status === 'approved' ? styles.statusApproved : styles.statusPending
              ]}>
                <Text style={[
                  styles.statusText,
                  req.status === 'approved' ? { color: Colors.white } : { color: Colors.status.pending }
                ]}>
                  {req.status === 'approved' ? 'Approved' : 'Pending'}
                </Text>
              </View>
            </View>
            
            {req.status === 'approved' && (
              <View style={styles.approvalFooter}>
                <View style={styles.approvalRow}>
                  <Check size={14} color={Colors.text.secondary} />
                  <Text style={styles.approvalText}>Approved by Manager</Text>
                </View>
              </View>
            )}

            {isManager && req.status === 'pending' && (
              <View style={styles.managerActions}>
                <TouchableOpacity style={styles.rejectBtn}>
                  <X size={18} color={Colors.text.primary} />
                  <Text style={styles.rejectText}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.approveBtn}>
                  <Check size={18} color={Colors.white} />
                  <Text style={styles.approveText}>Approve</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
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
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.text.primary,
  },
  headerDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardInfo: {
    flex: 1,
    marginRight: 12,
  },
  materialName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  quantity: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 8,
  },
  requester: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.text.tertiary,
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  statusPending: {
    backgroundColor: Colors.status.pendingBg,
  },
  statusApproved: {
    backgroundColor: Colors.status.approvedBg,
  },
  statusText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
  },
  approvalFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  approvalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  approvalText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.text.secondary,
  },
  managerActions: {
    flexDirection: 'row',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: 12,
  },
  rejectBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
  },
  rejectText: {
    fontFamily: 'Inter_500Medium',
    color: Colors.text.primary,
  },
  approveBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
  },
  approveText: {
    fontFamily: 'Inter_500Medium',
    color: Colors.white,
  },
});
