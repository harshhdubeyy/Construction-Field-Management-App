import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { ArrowLeft, Calendar, TrendingUp, AlertTriangle } from 'lucide-react-native';

export default function AnalyticsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={20} color={Colors.text.primary} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Analytics Dashboard</Text>
            <Text style={styles.headerDesc}>Project Insights</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Top Cards */}
        <View style={styles.topCardsRow}>
          <View style={[styles.topCard, { backgroundColor: Colors.primary }]}>
            <View style={styles.topCardHeader}>
              <View style={styles.iconCircle}>
                <Calendar size={16} color={Colors.primary} />
              </View>
              <Text style={[styles.topCardLabel, { color: 'rgba(255,255,255,0.9)' }]}>Project Days</Text>
            </View>
            <Text style={[styles.topCardValue, { color: Colors.white }]}>145</Text>
            <Text style={[styles.topCardSub, { color: 'rgba(255,255,255,0.75)' }]}>of 210 days</Text>
          </View>

          <View style={[styles.topCard, { backgroundColor: '#404040' }]}>
            <View style={styles.topCardHeader}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
                <TrendingUp size={16} color={Colors.white} />
              </View>
              <Text style={[styles.topCardLabel, { color: 'rgba(255,255,255,0.9)' }]}>Progress</Text>
            </View>
            <Text style={[styles.topCardValue, { color: Colors.white }]}>67%</Text>
            <Text style={[styles.topCardSub, { color: 'rgba(255,255,255,0.75)' }]}>On schedule</Text>
          </View>
        </View>

        {/* Budget Overview */}
        <View style={styles.sectionCard}>
          <Text style={styles.cardTitle}>Budget Overview</Text>
          
          <View style={styles.budgetRow}>
            <View>
              <Text style={styles.budgetLabel}>Total Budget</Text>
              <Text style={styles.budgetValue}>₹2.5 Cr</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.budgetLabel}>Spent</Text>
              <Text style={styles.budgetValue}>₹1.68 Cr</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '67%' }]} />
          </View>

          <View style={styles.budgetStatsRow}>
            <View style={styles.budgetStat}>
              <Text style={styles.budgetLabel}>Remaining</Text>
              <Text style={styles.budgetStatValue}>82L</Text>
            </View>
            <View style={styles.budgetStat}>
              <Text style={styles.budgetLabel}>Projected</Text>
              <Text style={[styles.budgetStatValue, { color: '#F54900' }]}>-5% over</Text>
            </View>
          </View>
        </View>

        {/* Labor Utilization */}
        <View style={styles.sectionCard}>
          <Text style={styles.cardTitle}>Labor Utilization</Text>
          
          <View style={styles.laborItem}>
            <View style={styles.laborHeader}>
              <Text style={styles.laborLabel}>Masons</Text>
              <Text style={styles.laborValue}>12/15</Text>
            </View>
            <View style={styles.laborBarBg}>
              <View style={[styles.laborBarFill, { width: '80%' }]} />
            </View>
          </View>

          <View style={styles.laborItem}>
            <View style={styles.laborHeader}>
              <Text style={styles.laborLabel}>Helpers</Text>
              <Text style={styles.laborValue}>18/20</Text>
            </View>
            <View style={styles.laborBarBg}>
              <View style={[styles.laborBarFill, { width: '90%' }]} />
            </View>
          </View>

          <View style={styles.laborItem}>
            <View style={styles.laborHeader}>
              <Text style={styles.laborLabel}>Electricians</Text>
              <Text style={styles.laborValue}>5/8</Text>
            </View>
            <View style={styles.laborBarBg}>
              <View style={[styles.laborBarFill, { width: '62%' }]} />
            </View>
          </View>

          <View style={styles.laborItem}>
            <View style={styles.laborHeader}>
              <Text style={styles.laborLabel}>Plumbers</Text>
              <Text style={styles.laborValue}>4/5</Text>
            </View>
            <View style={styles.laborBarBg}>
              <View style={[styles.laborBarFill, { width: '80%', backgroundColor: '#404040' }]} />
            </View>
          </View>
        </View>

        {/* Material Consumption */}
        <View style={styles.sectionCard}>
          <Text style={styles.cardTitle}>Material Consumption (This Week)</Text>
          
          <View style={styles.materialRow}>
            <View style={styles.materialIconBox}>
              <View style={styles.dot} />
            </View>
            <View style={styles.materialInfo}>
              <Text style={styles.materialName}>Cement</Text>
              <Text style={styles.materialQty}>850 bags</Text>
            </View>
            <Text style={[styles.materialTrend, { color: '#F54900' }]}>+12%</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.materialRow}>
            <View style={styles.materialIconBox}>
              <View style={styles.dot} />
            </View>
            <View style={styles.materialInfo}>
              <Text style={styles.materialName}>Steel</Text>
              <Text style={styles.materialQty}>4,500 kg</Text>
            </View>
            <Text style={[styles.materialTrend, { color: '#F54900' }]}>+8%</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.materialRow}>
            <View style={styles.materialIconBox}>
              <View style={styles.dot} />
            </View>
            <View style={styles.materialInfo}>
              <Text style={styles.materialName}>Bricks</Text>
              <Text style={styles.materialQty}>12,000 nos</Text>
            </View>
            <Text style={[styles.materialTrend, { color: Colors.text.secondary }]}>-5%</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.materialRow}>
            <View style={styles.materialIconBox}>
              <View style={styles.dot} />
            </View>
            <View style={styles.materialInfo}>
              <Text style={styles.materialName}>Sand</Text>
              <Text style={styles.materialQty}>18 cubic m</Text>
            </View>
            <Text style={[styles.materialTrend, { color: '#F54900' }]}>+15%</Text>
          </View>
        </View>

        {/* Attention Required */}
        <View style={styles.attentionCard}>
          <Text style={styles.attentionTitle}>Attention Required</Text>
          <View style={styles.attentionList}>
            <Text style={styles.attentionItem}>• Cement stock running low (15% remaining)</Text>
            <Text style={styles.attentionItem}>• Labor attendance below target (82%)</Text>
            <Text style={styles.attentionItem}>• 3 material requests pending approval</Text>
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
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  topCardsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  topCard: {
    flex: 1,
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  topCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCardLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
  },
  topCardValue: {
    fontFamily: 'Inter_400Regular',
    fontSize: 30,
    marginBottom: 4,
  },
  topCardSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 20,
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  budgetLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  budgetValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  budgetStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  budgetStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  budgetStatValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: Colors.text.primary,
  },
  laborItem: {
    marginBottom: 16,
  },
  laborHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  laborLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#404040',
  },
  laborValue: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.secondary,
  },
  laborBarBg: {
    height: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  laborBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  materialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  materialIconBox: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary,
  },
  materialInfo: {
    flex: 1,
  },
  materialName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: Colors.text.primary,
  },
  materialQty: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
  },
  materialTrend: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 12,
  },
  attentionCard: {
    backgroundColor: '#FFF7ED',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#FFD6A7',
  },
  attentionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#7E2A0C',
    marginBottom: 12,
  },
  attentionList: {
    gap: 8,
  },
  attentionItem: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#9F2D00',
    lineHeight: 20,
  },
});
