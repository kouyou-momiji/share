/*
 * @Author: yanzhourong
 * @Date: 2022-07-10 22:24:30
 * @LastEditTime: 2022-07-10 23:53:09
 * @Description: 
 */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Param(props) {
  console.log("Param,props=",props)
  // const {id} = useParams()
  function historyGo(){
    props.history.go(-2)
  }
  return (
    <div>
      {/* <div>Param：{id}</div> */}
      <div>Param：{props.match.params.id}</div>
      <button onClick={historyGo}>history_go</button>
    </div>
  )
}
