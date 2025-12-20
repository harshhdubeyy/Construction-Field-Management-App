import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { ArrowLeft, Share2, Download } from 'lucide-react-native';
import { Button } from '../../components/Button';

export default function InvoicingScreen() {
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
            <Text style={styles.headerTitle}>Invoice Details</Text>
            <Text style={styles.headerDesc}>GST-Ready Invoice</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Invoice Card */}
        <View style={styles.invoiceCard}>
          {/* Invoice Header */}
          <View style={styles.invHeader}>
            <View>
              <Text style={styles.invTitle}>TAX INVOICE</Text>
              <Text style={styles.invNumber}>INV-2025-001234</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.invLabel}>Date</Text>
              <Text style={styles.invDate}>19 Dec 2025</Text>
            </View>
          </View>

          {/* Bill To */}
          <View style={styles.billToSection}>
            <Text style={styles.sectionLabel}>BILL TO</Text>
            <Text style={styles.billName}>Prestige Constructions Pvt Ltd</Text>
            <Text style={styles.billAddress}>Whitefield, Bangalore - 560066</Text>
            <Text style={styles.billGst}>GSTIN: 29AABCP1234C1Z5</Text>
          </View>

          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeadText, { flex: 2 }]}>Description</Text>
            <Text style={[styles.tableHeadText, { flex: 1, textAlign: 'center' }]}>Qty</Text>
            <Text style={[styles.tableHeadText, { flex: 1, textAlign: 'right' }]}>Amount</Text>
          </View>

          {/* Items */}
          <View style={styles.itemRow}>
            <Text style={[styles.itemText, { flex: 2 }]}>Foundation Work - Phase 1</Text>
            <Text style={[styles.itemText, { flex: 1, textAlign: 'center', color: Colors.text.secondary }]}>2500</Text>
            <Text style={[styles.itemText, { flex: 1, textAlign: 'right' }]}>₹3,00,000</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.itemRow}>
            <Text style={[styles.itemText, { flex: 2 }]}>Column Casting</Text>
            <Text style={[styles.itemText, { flex: 1, textAlign: 'center', color: Colors.text.secondary }]}>50</Text>
            <Text style={[styles.itemText, { flex: 1, textAlign: 'right' }]}>₹2,50,000</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.itemRow}>
            <Text style={[styles.itemText, { flex: 2 }]}>Slab Work - 2nd Floor</Text>
            <Text style={[styles.itemText, { flex: 1, textAlign: 'center', color: Colors.text.secondary }]}>1800</Text>
            <Text style={[styles.itemText, { flex: 1, textAlign: 'right' }]}>₹2,70,000</Text>
          </View>
          <View style={styles.divider} />

          {/* Totals */}
          <View style={styles.totalsSection}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalValue}>₹8,20,000</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>CGST (9%)</Text>
              <Text style={styles.totalValue}>₹73,800</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>SGST (9%)</Text>
              <Text style={styles.totalValue}>₹73,800</Text>
            </View>
            <View style={[styles.divider, { marginVertical: 12 }]} />
            <View style={styles.totalRow}>
              <Text style={styles.grandTotalLabel}>Total Amount</Text>
              <Text style={styles.grandTotalValue}>₹9,67,600</Text>
            </View>
          </View>
        </View>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View>
              <Text style={styles.summaryLabel}>Total Invoiced</Text>
              <Text style={styles.summaryValue}>₹9.67L</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.summaryLabel}>Work Completed</Text>
              <Text style={styles.summaryValueBlack}>3 Items</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionButtons}>
          <Button 
            title="Share Invoice" 
            variant="outline" 
            onPress={() => {}} 
            style={{ flex: 1 }}
          />
          <View style={{ width: 12 }} />
          <Button 
            title="Download PDF" 
            onPress={() => {}} 
            style={{ flex: 1 }}
            icon={<Download size={18} color={Colors.white} />}
          />
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
  invoiceCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  invHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  invTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  invNumber: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.secondary,
  },
  invLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  invDate: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.primary,
  },
  billToSection: {
    marginBottom: 32,
  },
  sectionLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: 8,
  },
  billName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  billAddress: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 2,
  },
  billGst: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.secondary,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tableHeadText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: Colors.text.secondary,
  },
  itemRow: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  itemText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.primary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.secondary,
    marginVertical: 4,
  },
  totalsSection: {
    marginTop: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.secondary,
  },
  totalValue: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: Colors.text.primary,
  },
  grandTotalLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
  },
  grandTotalValue: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: Colors.text.primary,
  },
  summaryCard: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FFD6A7',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#7E2A0C',
    marginBottom: 4,
  },
  summaryValue: {
    fontFamily: 'Inter_400Regular',
    fontSize: 24,
    color: '#7E2A0C',
  },
  summaryValueBlack: {
    fontFamily: 'Inter_400Regular',
    fontSize: 24,
    color: Colors.text.primary,
  },
  actionButtons: {
    flexDirection: 'row',
  },
});
