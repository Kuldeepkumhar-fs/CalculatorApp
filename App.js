import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Modal
} from 'react-native';


const App = () => {

  const [data, setData] = useState('')
  const [showOutputModal, setShowOutputModal] = useState(false)


  return (
    <View style={styles.mainView} >
      <View style={{ flex: 1 }} >
        <View style={styles.outputStyle} >
          <Text style={{ fontSize: 35, color: '#787a79' }}   >{data}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }} >
        <View style={{ flex: 1, margin: '3%' }} >
          <View style={styles.rowStyle} >
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData('')} >
              <Text style={styles.textStyle} >C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} >
              <Text style={styles.textStyle} >+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '%')} >
              <Text style={styles.textStyle} >%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '/')} >
              <Text style={styles.rightStyle} >/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowStyle} >
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '7')} >
              <Text style={styles.textStyle} >7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '8')}  >
              <Text style={styles.textStyle} >8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '9')} >
              <Text style={styles.textStyle} >9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '×')} >
              <Text style={styles.rightBoxStyle} >×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowStyle} >
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '4')} >
              <Text style={styles.textStyle} >4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '5')} >
              <Text style={styles.textStyle} >5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '6')} >
              <Text style={styles.textStyle} >6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '-')} >
              <Text style={styles.rightBoxStyle} >-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowStyle} >
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '1')} >
              <Text style={styles.textStyle} >1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '2')} >
              <Text style={styles.textStyle} >2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '3')} >
              <Text style={styles.textStyle} >3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '+')} >
              <Text style={styles.rightBoxStyle} >+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowStyle} >
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '.')} >
              <Text style={styles.textStyle} >.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '0')} >
              <Text style={styles.textStyle} >0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => setData(data + '00')} >
              <Text style={styles.textStyle} >00</Text>
            </TouchableOpacity>
            <View style={styles.buttonStyle} >
              <TouchableOpacity style={styles.outerEqualsStyle}
                onPress={() => {
                  if (data == '1+3+9') {
                    setShowOutputModal(true)
                  }
                }}
              >
                <Text style={styles.equalTextStyle} >=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>


      {/* output modal */}
      <Modal
        style={{ flex: 1, backgroundColor: 'red' }}
        visible={showOutputModal}
        transparent={true}
        onRequestClose={() => {
          setShowOutputModal(false)
          setData('')
        }}

      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <View style={{ height: '47%', width: '70%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#9c9e9d', opacity: 0.8, borderRadius: 60 }} >
            <Text style={{ fontSize: 35, color: '#e5e5e5' }}  >Hello World</Text>
          </View>
        </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: '#3e403f' },
  rowStyle: { flex: 1, flexDirection: 'row' },
  buttonStyle: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  textStyle: { fontSize: 22, fontWeight: 'bold', color: '#5e605f' },
  rightStyle: { height: '100%', width: '60%', fontSize: 18, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', color: '#5e605f', backgroundColor: '#363636', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  rightBoxStyle: { height: '100%', width: '60%', fontSize: 18, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', color: '#5e605f', backgroundColor: '#363636' },
  outputStyle: { flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginHorizontal: '8%', borderBottomWidth: 0.9, borderColor: '#363636' },
  outerEqualsStyle: { height: '100%', width: '60%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#363636' },
  equalTextStyle: { height: '90%', width: '100%', fontSize: 18, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', color: '#5e605f', backgroundColor: '#f9f5bd', borderRadius: 30 }
});

export default App;
