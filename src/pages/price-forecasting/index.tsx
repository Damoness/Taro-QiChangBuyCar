import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text ,Image} from '@tarojs/components'

import './index.scss'



export default class index extends Component {
  render() {
    return (
      <View  className='index' >
        <View className='banner'>
          <Text className='banner-text'>榜单预测未来三个月有可能产生的数据波动</Text>
        </View>
        {
          [...Array(10).keys()].map((item,i)=>{

            return(
              <View className='item'>

                <View className='item-left'>

                  <View className='item-ranking' >
                    <Text className='item-ranking-text'>{i}</Text>
                  </View>

                  <Image mode='aspectFit' className='item-carImage' src={'http://t1.qichangv.com/images/201909/0909/93b7a367-d045-495f-bd65-26a8543aacff.png'} />

                  <View className='item-titleContainer'>
                    <Text className='item-name'>奥迪Q7</Text>
                    <Text className='item-price'>12.88-21.65万</Text>
                  </View>

                </View>

                <View className='item-titleContainer'>
                  <Text className='item-percent'>35%</Text>
                  <Text className='item-forecastTitle'>预计下浮</Text>
                </View>

              </View>

            )
          })
        }
      </View>
    )
  }
}
