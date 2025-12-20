import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { ArrowLeft, Search, MapPin, Check, X } from 'lucide-react-native';
import { Button } from '../../components/Button';

const workersData = [
  { id: 1, name: 'Ramesh Kumar', role: 'Mason', status: 'present' },
  { id: 2, name: 'Suresh Yadav', role: 'Helper', status: 'absent' },
  { id: 3, name: 'Prakash Singh', role: 'Electrician', status: 'present' },
  { id: 4, name: 'Vijay Sharma', role: 'Mason', status: 'present' },
  { id: 5, name: 'Mukesh Patel', role: 'Carpenter', status: 'present' },
  { id: 6, name: 'Rajesh Verma', role: 'Helper', status: 'present' },
  { id: 7, name: 'Anil Kumar', role: 'Plumber', status: 'present' },
  { id: 8, name: 'Dinesh Gupta', role: 'Helper', status: 'present' },
];

export default function AttendanceScreen() {
  const router = useRouter();
  const [workers, setWorkers] = useState(workersData);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleStatus = (id: number, status: 'present' | 'absent') => {
    setWorkers(workers.map(w => w.id === id ? { ...w, status } : w));
  };

  const presentCount = workers.filter(w => w.status === 'present').length;
  const absentCount = workers.filter(w => w.status === 'absent').length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={20} color={Colors.text.primary} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>GPS Attendance</Text>
            <Text style={styles.headerDate}>19/12/2025</Text>
          </View>
        </View>
        
        <View style={styles.locationBadge}>
          <MapPin size={14} color={Colors.primaryDark} />
          <Text style={styles.locationText}>Prestige Heights, Whitefield</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{workers.length}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={[styles.statBox, styles.statBoxPresent]}>
          <Text style={[styles.statValue, { color: Colors.primaryDark }]}>{presentCount}</Text>
          <Text style={[styles.statLabel, { color: Colors.primary }]}>Present</Text>
        </View>
        <View style={[styles.statBox, styles.statBoxAbsent]}>
          <Text style={[styles.statValue, { color: '#404040' }]}>{absentCount}</Text>
          <Text style={styles.statLabel}>Absent</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Search size={20} color={Colors.text.light} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search worker name or role..."
          placeholderTextColor={Colors.text.light}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {workers.map((worker) => (
          <View key={worker.id} style={styles.workerCard}>
            <View style={styles.workerInfo}>
              <Text style={styles.workerName}>{worker.name}</Text>
              <Text style={styles.workerRole}>{worker.role}</Text>
            </View>
            <View style={styles.toggleContainer}>
              <TouchableOpacity 
                style={[styles.toggleBtn, worker.status === 'present' ? styles.toggleBtnPresent : styles.toggleBtnInactive]}
                onPress={() => toggleStatus(worker.id, 'present')}
              >
                <Check size={16} color={worker.status === 'present' ? Colors.white : Colors.text.light} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.toggleBtn, worker.status === 'absent' ? styles.toggleBtnAbsent : styles.toggleBtnInactive]}
                onPress={() => toggleStatus(worker.id, 'absent')}
              >
                <X size={16} color={worker.status === 'absent' ? Colors.white : Colors.text.light} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Button title="Submit Attendance" onPress={() => router.push('/attendance/success')} />
      </View>
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
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
  headerDate: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryLight,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#FFD6A7',
    gap: 6,
  },
  locationText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#7E2A0C',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statBoxPresent: {
    backgroundColor: Colors.primaryLight,
    borderColor: '#FFD6A7',
  },
  statBoxAbsent: {
    backgroundColor: Colors.secondary,
  },
  statValue: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: Colors.text.primary,
  },
  statLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: Colors.text.secondary,
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: Colors.text.primary,
  },
  listContainer: {
    padding: 20,
    paddingTop: 0,
  },
  workerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  workerInfo: {
    flex: 1,
  },
  workerName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
  },
  workerRole: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  toggleBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleBtnInactive: {
    backgroundColor: Colors.secondary,
  },
  toggleBtnPresent: {
    backgroundColor: Colors.primary,
  },
  toggleBtnAbsent: {
    backgroundColor: '#404040',
  },
  footer: {
    padding: 20,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
