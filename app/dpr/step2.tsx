import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { ArrowLeft } from 'lucide-react-native';
import { Button } from '../../components/Button';

const units = ['sqft', 'cubic m', 'kg', 'nos'];

export default function DPRStep2Screen() {
  const router = useRouter();
  const [selectedUnit, setSelectedUnit] = useState('sqft');
  const [quantity, setQuantity] = useState('');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={20} color={Colors.text.primary} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Daily Progress Report</Text>
            <Text style={styles.headerDate}>19/12/2025</Text>
          </View>
        </View>
        
        <View style={styles.progressContainer}>
          <View style={[styles.progressSegment, styles.progressActive]} />
          <View style={[styles.progressSegment, styles.progressActive]} />
          <View style={styles.progressSegment} />
        </View>
        <Text style={styles.stepText}>Step 2 of 3</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Work Completed</Text>
        
        <View style={styles.card}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.value}>Excavation</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.label}>Quantity Completed</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter quantity"
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
          />
          
          <Text style={styles.label}>Unit</Text>
          <View style={styles.unitContainer}>
            {units.map((unit) => (
              <TouchableOpacity 
                key={unit}
                style={[styles.unitBtn, selectedUnit === unit && styles.unitBtnSelected]}
                onPress={() => setSelectedUnit(unit)}
              >
                <Text style={[styles.unitText, selectedUnit === unit && styles.unitTextSelected]}>
                  {unit}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Button 
            title="Next" 
            onPress={() => router.push('/dpr/step3')} 
            disabled={!quantity}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: 20,
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
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.border,
  },
  progressActive: {
    backgroundColor: Colors.primary,
  },
  stepText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: Colors.text.secondary,
    textAlign: 'right',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.text.primary,
    marginBottom: 20,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: Colors.text.secondary,
    marginBottom: 8,
  },
  value: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: Colors.text.primary,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 16,
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 24,
  },
  unitContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  unitBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  unitBtnSelected: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  unitText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: Colors.text.primary,
  },
  unitTextSelected: {
    color: Colors.primary,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 20,
  },
});
