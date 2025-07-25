
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';

export default function App() {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [increment, setIncrement] = useState('1');
  const [numbers, setNumbers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [pickedNumber, setPickedNumber] = useState(null);

  const generateList = () => {
    setPickedNumber(null);
    const start = parseInt(min);
    const end = parseInt(max);
    const step = parseInt(increment);
    if (isNaN(start) || isNaN(end) || isNaN(step) || step <= 0) return;
    let list = [];
    for (let i = start; i <= end; i += step) {
      if (filter === 'even' && i % 2 !== 0) continue;
      if (filter === 'odd' && i % 2 === 0) continue;
      list.push(i);
    }
    if (sortOrder === 'desc') list.reverse();
    setNumbers(list);
  };

  const randomizeList = () => {
    setPickedNumber(null);
    let shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setNumbers(shuffled);
  };

  const pickOne = () => {
    if (numbers.length === 0) return;
    const picked = numbers[Math.floor(Math.random() * numbers.length)];
    setPickedNumber(picked);
  };

  const StyledButton = ({ title, onPress, active }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, active && styles.buttonActive]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          {pickedNumber !== null ? (
            <View style={styles.singleNumberContainer}>
              <Text style={styles.singleNumber}>{pickedNumber}</Text>
            </View>
          ) : (
            <ScrollView
              contentContainerStyle={styles.numberList}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {numbers.map((num, idx) => (
                <Text key={idx} style={styles.number}>{num}</Text>
              ))}
            </ScrollView>
          )}
        </View>

        <Text style={styles.title}>Number Generator</Text>

        <View style={styles.row}>
          <TextInput style={styles.input} keyboardType="numeric" value={min} onChangeText={setMin} placeholder="Min" />
          <TextInput style={styles.input} keyboardType="numeric" value={max} onChangeText={setMax} placeholder="Max" />
          <TextInput style={styles.input} keyboardType="numeric" value={increment} onChangeText={setIncrement} placeholder="Step" />
        </View>

        <View style={styles.row}>
          <StyledButton title="All" onPress={() => setFilter('all')} active={filter === 'all'} />
          <StyledButton title="Even" onPress={() => setFilter('even')} active={filter === 'even'} />
          <StyledButton title="Odd" onPress={() => setFilter('odd')} active={filter === 'odd'} />
        </View>

        <View style={styles.row}>
          <StyledButton title="Asc" onPress={() => setSortOrder('asc')} active={sortOrder === 'asc'} />
          <StyledButton title="Desc" onPress={() => setSortOrder('desc')} active={sortOrder === 'desc'} />
        </View>

        <View style={styles.row}>
          <StyledButton title="Generate" onPress={generateList} />
          <StyledButton title="Randomize" onPress={randomizeList} />
          <StyledButton title="Pick One" onPress={pickOne} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
