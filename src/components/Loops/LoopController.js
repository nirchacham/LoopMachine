import React from 'react';
import Loop from '../Loop';
import './LoopController.css';
import FontAwesome from 'react-fontawesome';

import song1 from '../../mp3/120_future_funk_beats_25.mp3';
import song2 from '../../mp3/120_stutter_breakbeats_16.mp3'
import song3 from '../../mp3/Bass Warwick heavy funk groove on E 120 BPM.mp3'
import song4 from '../../mp3/electric guitar coutry slide 120bpm - B.mp3'
import song5 from '../../mp3/FUD_120_StompySlosh.mp3'
import song6 from '../../mp3/GrooveB_120bpm_Tanggu.mp3'
import song7 from '../../mp3/MazePolitics_120_Perc.mp3'
import song8 from '../../mp3/PAS3GROOVE1.03B.mp3'
import song9 from '../../mp3/SilentStar_120_Em_OrganSynth.mp3'
import background1 from '../../logos/funk_beats.png'
import background2 from '../../logos/Stutter_breakbeats.png'
import background3 from '../../logos/Bass_Warwick.png'
import background4 from '../../logos/Country_guitar.png'
import background5 from '../../logos/Stompy_slosh.png'
import background6 from '../../logos/Tanggu.png'
import background7 from '../../logos/Maze.png'
import background8 from '../../logos/Groove_Michael.png'
import background9 from '../../logos/Silent_star.png'
import {Howl, Howler} from 'howler';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

const audioClips = [
  {song:song1,photo:background1}, {song:song2,photo:background2},
  {song:song3,photo:background3}, {song:song4,photo:background4},
  {song:song5,photo:background5}, {song:song6,photo:background6},
  {song:song7,photo:background7}, {song:song8,photo:background8},
  {song:song9,photo:background9}]                

class LoopController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      loopQueue:[],
      recordState: null,
      audioData:null,
      isPlaying:false
    };
  }

  start = () => { // Start recording function
    this.setState({
      recordState: RecordState.START
    })
  }
 
  stop = () => { // Stop recording function 
    this.setState({
      recordState: RecordState.STOP
    })
  }

  onStop = (audioData) => { // When user click on stop button this function is activated and stores the record
    this.setState({
      audioData:audioData
    })  
  }

  playRecord = () => { // Function that activates the recorded audio
    this.state.audioData.play()
  }

  handleSave = () => { // Function that saves the record in the LocalStorage
    const audioRecord = this.state.audioData;
    localStorage.setItem('audioData', JSON.stringify(audioRecord));
  }

  handleLoad = () => { // Function that loads the record if it was saved
    const audioRecord = localStorage.getItem('audioData')
    this.setState({
      audioData: JSON.parse(audioRecord)
    })
  }


  deleteLoopFromPlaylist = (audioToDelete) => {
    const toPlay = this.state.playlist
    toPlay.map(audio =>{
      if(audio._src==audioToDelete){ // Finds the wanted loop to be deleted 
        audio.stop()
        toPlay.splice(toPlay.indexOf(audio),1)
      }
    })
    toPlay.length == 0? this.setState({isPlaying:false, playlist:toPlay}) : this.setState({playlist:toPlay}) 
  }

  deleteLoopFromQueue = (audioToDelete) => {
    const queue = this.state.loopQueue
    queue.map(audio =>{
      if(audio._src==audioToDelete){
        queue.splice(queue.indexOf(audio),1)
      }
    })
    this.setState({loopQueue:queue})
  }

  addLoopAudio(audioToAdd){
    const toPlay = this.state.playlist
    const queue = this.state.loopQueue
    const loop = new Howl({ // The structure that is responsible for audio
      src:audioToAdd,
      loop:true
   })
   loop.on('end', this.checkForNewLoops)

    if (toPlay.length == 0){ 
        toPlay.push(loop) 
        this.setState({playlist:toPlay})
    }

    else{
        if(!this.state.isPlaying){ // Checking if any loop is playing
            if (toPlay.some(audio => audioToAdd == audio._src)) // Toggle-off
                this.deleteLoopFromPlaylist(audioToAdd) 
            else{ // Toggle-on
                toPlay.push(loop)
                this.setState({playlist:toPlay})
            }
        }
        else{
          if (toPlay.some(audio => audioToAdd == audio._src) || queue.some(audio => audioToAdd == audio._src)){
            this.deleteLoopFromPlaylist(audioToAdd) // Toggle-off
            this.deleteLoopFromQueue(audioToAdd) // Toggle-off
          }
          else{
            queue.push(loop) // Toggle-on, will play in the next loop cycle
            this.setState({loopQueue:queue})
          }
        }
    }
  }

   
  PlayLoops = (src) => {
    const toPlay = this.state.playlist
    const queue = this.state.loopQueue

    if(!this.state.isPlaying){ // Checks that user doesnt press play multiply times so it wont play simultaneously
        if(queue.length>0){ // handles the case the user stopped before the next loop cycle
            queue.map(audio => {// and the loops in the queue didnt managed to enter yet
              const loopToMove = queue.splice(queue.indexOf(audio),1)
              toPlay.push(loopToMove[0])
            })
        }
        if (toPlay.length>0){ // Activate loops
          toPlay.map(audio => audio.play())
            this.setState({
              playlist:toPlay,
              loopQueue:queue,
              isPlaying:true
            })
        }
    }  
  }

  checkForNewLoops = () => { // Entering here in the end of every loop cycle to check if there are new loops
    const toPlay = this.state.playlist  
    const queue = this.state.loopQueue
    if(queue.length>0)     // checking if the user entered new loops so they  
       queue.map(audio => {// will be entered in the next loop cycle
         audio.play()
         const loopToMove = queue.splice(queue.indexOf(audio),1)
         toPlay.push(loopToMove[0])
    })
    this.setState({
      playlist:toPlay,
      loopQueue:queue,
    })
  }

  StopLoops = () => { // Aborting all the loops that are playing
    const toPlay = this.state.playlist
    toPlay.map(audio=>audio.stop())
    this.setState({
      playlist:toPlay,
      isPlaying:false
    })
  }

  RenderLoopButtonsAndSound = () => {
    const { recordState } = this.state
    return (
            <div>
              <div className="buttons">
                <FontAwesome className="image-icon" name='play' title="Record session" onClick={this.PlayLoops} />
              </div>
              <div className="buttons" >
                <FontAwesome className="image-icon" name='stop' title="Stop recording" onClick={this.StopLoops} />
              </div>   
              <AudioReactRecorder state={recordState} onStop={this.onStop} canvasHeight='50' canvasWidth='300' />
              <div>
              <audio id='audio' controls src={this.state.audioData ? this.state.audioData.url : null}> </audio>
              </div>
            </div>
            )
  }
 RenderControlers = () => {
   return (
     <div>
        <div className="buttons">
        <FontAwesome className="image-icon" className="record" name='circle' title="Record session" onClick={this.start} />
        </div>  
        <div className="buttons" >
        <FontAwesome className="image-icon" name='stop' title="Stop recording" onClick={this.stop} />
        </div>   
        <div className="buttons">
        <FontAwesome className="image-icon" name='save' title="Save session" onClick={this.handleSave} />
        </div>  
        <div className="buttons" >
        <FontAwesome className="image-icon" name='upload' title="Load session" onClick={this.handleLoad} />
        </div>  
      </div>
   )
 }

  render() {
    return (
      <div className="loops-root">
        {audioClips.map((audioObj,index) => {
          return <Loop key={index} audio = {audioObj.song} photo= {audioObj.photo} isAudioOn = {this.addLoopAudio.bind(this)}/>
        })}         
         {this.RenderLoopButtonsAndSound()}
         {this.RenderControlers()}
      </div>
      
    );
  }
}

export default LoopController;
