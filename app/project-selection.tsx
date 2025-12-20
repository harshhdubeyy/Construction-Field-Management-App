import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Colors } from '../constants/Colors';
import { Building2, MapPin, Calendar } from 'lucide-react-native';

const projects = [
  {
    id: 1,
    name: 'Prestige Heights Tower A',
    location: 'Whitefield, Bangalore',
    due: '31 Dec 2025',
    progress: 67,
    icon: 'building'
  },
  {
    id: 2,
    name: 'Metro Station - Phase 2',
    location: 'MG Road, Bangalore',
    due: '15 Mar 2026',
    progress: 45,
    icon: 'train'
  },
  {
    id: 3,
    name: 'Brigade Residential Complex',
    location: 'Sarjapur Road, Bangalore',
    due: '30 Jan 2026',
    progress: 82,
    icon: 'home'
  }
];

export default function ProjectSelectionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const role = params.role || 'engineer';

  const handleProjectSelect = (project: typeof projects[0]) => {
    router.push({
      pathname: '/dashboard',
      params: { 
        role: role,
        projectName: project.name,
        projectId: project.id
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Project</Text>
        <Text style={styles.subtitle}>Choose a project to continue</Text>
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {projects.map((project) => (
          <TouchableOpacity 
            key={project.id} 
            style={styles.card}
            onPress={() => handleProjectSelect(project)}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Building2 size={24} color={Colors.primary} />
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.projectName}>{project.name}</Text>
                <View style={styles.row}>
                  <MapPin size={14} color={Colors.text.tertiary} style={{ marginRight: 4 }} />
                  <Text style={styles.locationText}>{project.location}</Text>
                </View>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardFooter}>
              <View style={styles.row}>
                <Calendar size={14} color={Colors.text.tertiary} style={{ marginRight: 4 }} />
                <Text style={styles.dueText}>Due: {project.due}</Text>
              </View>
            </View>

            <View style={styles.progressSection}>
              <View style={styles.progressLabels}>
                <Text style={styles.progressLabel}>Progress</Text>
                <Text style={styles.progressValue}>{project.progress}%</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${project.progress}%` }]} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: Colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: Colors.text.secondary,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
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
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  projectName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.tertiary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: 12,
    opacity: 0.5,
  },
  cardFooter: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dueText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.tertiary,
  },
  progressSection: {
    gap: 8,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: Colors.text.tertiary,
  },
  progressValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: Colors.text.primary,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
});
