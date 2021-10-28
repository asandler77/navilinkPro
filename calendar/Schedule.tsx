import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import {DateData} from 'react-native-calendars/src/types';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState({});
  const [chosenDay, setChosenDayDay] = useState('');

  const customItem = {'2021-10-25': [{name: 'Item for 2021-10-25 #0'}]};
    console.log('chosenDay', chosenDay);


  const loadItems = day => {
    console.log('day', day);
    setItems(customItem);

    // setTimeout(() => {
    //     for (let i = -15; i < 85; i++) {
    //         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //         const strTime = timeToString(time);
    //         if (!items[strTime]) {
    //             items[strTime] = [];
    //             const numItems = Math.floor(Math.random() * 3 + 1);
    //             for (let j = 0; j < numItems; j++) {
    //                 items[strTime].push({
    //                     name: 'Item for ' + strTime + ' #' + j,
    //                     // height: Math.max(50, Math.floor(Math.random() * 150)),
    //                 });
    //             }
    //         }
    //     }
    //     const newItems = {};
    //     Object.keys(items).forEach((key) => {
    //         newItems[key] = items[key];
    //     });
    //     setItems(newItems);
    // }, 1000);
  };

  // setItems(customItem);

  const renderItem = item => {
    // console.log('item111', item)
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text>Calendar</Text>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        // selected={'2017-05-16'}
        renderItem={renderItem}
        // onPress={onDatePress}
        // onDayPress={setChosenDayDay}
      />
    </View>
  );
};

export default Schedule;
