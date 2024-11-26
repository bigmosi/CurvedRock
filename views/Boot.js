import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";
import { Navigation } from "react-native-navigation";
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    ActivityIndicator
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { quantityValues, size, color } from '../data/DropDowns';

