```
* TouchableOpacity
* const pressHandler = (id) => {
  console.log(id);
  setPeople((prevPeople)=> {
   return prevPeople.filter(person => person.id !== id)
  } )
}
<ScrollView>
      {people.map((item) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>))}
      </ScrollView>
      
 
 <FlatList data={people} renderItem={({item})=>
          (<Text style={styles.item}>{item.name}</Text>)} />

```