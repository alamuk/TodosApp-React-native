  
### Bringing the list of item
* View = it's div = which automatically use flex under the hood
* Text
* TextInput
* StyleSheet
* map()
* FlatList
* keyExtractor={(item) => item.id}
* numColumn={2}
* marginHorizontal: 
* marginTop
* Touchable Component
* onPress
* callback function / fire anonymous function
* onPress={()=> pressHandler(item.id)}
```
* TouchableOpacity
* const pressHandler = (id) => {
  console.log(id);
  setPeople((prevPeople)=> {
   return prevPeople.filter(person => person.id !== id)
  } )
}
* 
*
*

import { StyleSheet, Text, View, FlatList  } from 'react-native';    
<ScrollView>
      {people.map((item) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>))}
      </ScrollView>
      
  
 <FlatList data={people} renderItem={({item})=>
          (<Text style={styles.item}>{item.name}</Text>)} />

```

### Flexbox 
* flex: 1 = container taking all the space of the screen. 
