import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {

  const {logout} = useAuth()
  const handelLogout = async() => {
    await logout()
  }
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Pressable onPress={handelLogout} >
        <Text>
          Logout
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Home