import { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import * as Speech from 'expo-speech';

export default function App() {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [increment, setIncrement] = useState('1');
  const [numbers, setNumbers] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'even', 'odd'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc', 'desc'

  const generateList = () => {
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
    speakNumbers(list);
  };

  const randomizeList = () => {
    let shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setNumbers(shuffled);
    speakNumbers(shuffled);
  };

  const pickOne = () => {
    if (numbers.length === 0) return;
    const picked = numbers[Math.floor(Math.random() * numbers.length)];
    setNumbers([picked]);
    speakNumbers([picked]);
  };

  const speakNumbers = (list) => {
    const spoken = list.join(', ');
    Speech.speak(spoken);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Number Generator</Text>

      <View style={styles.row}>
        <TextInput style={styles.input} keyboardType="numeric" value={min} onChangeText={setMin} placeholder="Min" />
        <TextInput style={styles.input} keyboardType="numeric" value={max} onChangeText={setMax} placeholder="Max" />
        <TextInput style={styles.input} keyboardType="numeric" value={increment} onChangeText={setIncrement} placeholder="Step" />
      </View>

      <View style={styles.row}>
        <Button title="All" onPress={() => setFilter('all')} color={filter === 'all' ? 'blue' : 'gray'} />
        <Button title="Even" onPress={() => setFilter('even')} color={filter === 'even' ? 'blue' : 'gray'} />
        <Button title="Odd" onPress={() => setFilter('odd')} color={filter === 'odd' ? 'blue' : 'gray'} />
      </View>

      <View style={styles.row}>
        <Button title="Asc" onPress={() => setSortOrder('asc')} color={sortOrder === 'asc' ? 'blue' : 'gray'} />
        <Button title="Desc" onPress={() => setSortOrder('desc')} color={sortOrder === 'desc' ? 'blue' : 'gray'} />
      </View>

      <View style={styles.row}>
        <Button title="Generate" onPress={generateList} />
        <Button title="Randomize" onPress={randomizeList} />
        <Button title="Pick One" onPress={pickOne} />
      </View>

      <ScrollView style={styles.scroll}>
        {numbers.map((num, idx) => (
          <Text key={idx} style={styles.number}>{num}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
