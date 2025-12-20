import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { router } from "expo-router";
  import { Ionicons } from "@expo/vector-icons";
  
  export default function RoleSelection() {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    return (
        <SafeAreaView style={styles.safe}>
          <View style={styles.screen}>
      
            {/* Logo */}
            <View style={styles.logoWrapper}>
              <View style={styles.logoBox}>
                <Ionicons name="hammer-outline" size={32} color="#fff" />
              </View>
              <Text style={styles.appName}>Site Manager Pro</Text>
              <Text style={styles.subtitle}>Construction Field Management</Text>
            </View>
      
            {/* Card */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Select Your Role</Text>
      
              {/* Site Engineer */}
              <TouchableOpacity
                onPress={() => setSelectedRole("engineer")}
                style={[
                  styles.roleCard,
                  selectedRole === "engineer" && styles.roleCardActive,
                ]}
               >

              <View
                style={[
                  styles.iconBox,
                  selectedRole === "engineer" && styles.iconBoxActive,
                ]}
               >
                <Ionicons
                  name="construct-outline"
                  size={20}
                  color={selectedRole === "engineer" ? "#ffffff" : "#444"}
                />
               </View>

                <View>
                <Text
                  style={[
                    styles.roleTitle,
                    selectedRole === "engineer" && styles.roleTextActive,
                  ]}
                >
  Site Engineer
</Text>

                  <Text style={styles.roleSubtitle}>
                    Field Reporting & Operations
                  </Text>
                </View>
              </TouchableOpacity>
      
              {/* Project Manager */}
              <TouchableOpacity
                style={[
                  styles.roleCard,
                  selectedRole === "manager" && styles.roleCardActive,
                ]}
                onPress={() => setSelectedRole("manager")}
              >

                <View
                  style={[
                    styles.iconBox,
                    selectedRole === "manager" && styles.iconBoxActive,
                  ]}
                >

                  <Ionicons name="people-outline" size={20} color={selectedRole === "manager" ? "#ffffff" : "#444"}/>
                </View>
                <View>
                <Text
                  style={[
                    styles.roleTitle,
                    selectedRole === "manager" && styles.roleTextActive,
                  ]}
                >
                  Project Manager
                </Text>

                  <Text style={styles.roleSubtitle}>
                    Oversight & Analytics
                  </Text>
                </View>
              </TouchableOpacity>
      
              {/* Continue Button */}
              <TouchableOpacity
                disabled={!selectedRole}
                style={[
                  styles.continueButton,
                  selectedRole ? styles.continueActive : styles.continueDisabled,
                ]}
                onPress={() => {
                  if (!selectedRole) return;
                  router.push({
                    pathname: "/project-selection",
                    params: { role: selectedRole },
                  });
                }}
              >
                <Text
                  style={[
                    styles.continueText,
                    selectedRole ? { color: "#ffffff" } : { color: "#9ca3af" },
                  ]}
                >
                  Continue
                </Text>
              </TouchableOpacity>

            </View>
      
            {/* Footer */}
            <Text style={styles.footer}>
              Designed for Indian Construction Sites
            </Text>
      
          </View>
        </SafeAreaView>
      );    
  }
  
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",   // ✅ THIS IS THE FIX
      paddingHorizontal: 16,
      },
      
    logoWrapper: {
      alignItems: "center",
      marginTop: 32,
      marginBottom: 24,
    },
    logoBox: {
      width: 72,
      height: 72,
      borderRadius: 20,
      backgroundColor: "#f97316",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    appName: {
      fontSize: 20,
      fontWeight: "700",
    },
    subtitle: {
      fontSize: 13,
      color: "#6b7280",
      marginTop: 4,
    },
    card: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: "#ffffff",
      borderRadius: 24,
      padding: 20,
      marginTop: 16,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 20,
      elevation: 6,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 16,
    },
    roleCard: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: "#e5e7eb",
      marginBottom: 14, 
    },
    roleCardActive: {
       borderColor: "#F97316",
       backgroundColor: "#FFF7ED",
    },
    iconBoxActive: {
      backgroundColor: "#F97316",
    },
    roleTextActive: {
      color: "#F97316",
    },
    iconBox: {
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "#f3f4f6",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    },
    roleTitle: {
      fontSize: 15,
      fontWeight: "600",
    },
    roleSubtitle: {
      fontSize: 13,
      color: "#6b7280",
      marginTop: 2,
    },
    continueActive: {
      backgroundColor: "#F97316", // ORANGE
    },
    continueDisabled: {
      backgroundColor: "#E5E7EB", // GREY
    },
    continueButton: {
      marginTop: 12,
      height: 48,
      borderRadius: 14,
      backgroundColor: "#e5e7eb",
      alignItems: "center",
      justifyContent: "center",
    },
    continueText: {
      color: "#9ca3af",
      fontWeight: "600",
    },
    footer: {
      fontSize: 12,
      color: "#6b7280",
      marginTop: 20,
    },
  });
  