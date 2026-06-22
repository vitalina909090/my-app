import Separator from "@/components/ui/Separator";
import Button from "@/components/ui/Button";
import { globalStyles } from "../../global/gloabalStyle";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  {
    id: 1,
    name: "Ноутбук Lenovo IdeaPad 5",
    price: 28999,
    currency: "UAH",
    category: "electronics",
    inStock: true,
    quantity: 12,
  },
  {
    id: 2,
    name: "Смартфон Samsung Galaxy S24",
    price: 35999,
    currency: "UAH",
    category: "electronics",
    inStock: true,
    quantity: 7,
  },
  {
    id: 3,
    name: "Навушники Sony WH-1000XM5",
    price: 14999,
    currency: "UAH",
    category: "audio",
    inStock: false,
    quantity: 0,
  },
  {
    id: 4,
    name: "Мишка Logitech MX Master 3S",
    price: 4999,
    currency: "UAH",
    category: "accessories",
    inStock: true,
    quantity: 25,
  },
  {
    id: 5,
    name: "Клавіатура Keychron K2",
    price: 3899,
    currency: "UAH",
    category: "accessories",
    inStock: true,
    quantity: 14,
  },
];

const Components = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
        <Link href="/" style={globalStyles.link}>
        Home
        </Link>
        <Text style={globalStyles.title}>Components</Text>

        <Separator />

        <Button>Login</Button>
        <Button variant="secondary">Login</Button>
        <Button size="lg" hitSlop={5}>
        Login
        </Button>

        <Separator />
        <FlatList 
            data={products}
            keyExtractor={(k) => k.id.toString()}
            renderItem={({ item }) => (
                <View style={{marginBottom: 10}}>
                    <Text>{item.name} - {item.price} {item.currency}</Text>
                </View>
            )}
        />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Components;
