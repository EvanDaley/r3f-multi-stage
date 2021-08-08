import useStore from '../../store'
import ReactPlayer from 'react-player'

export default function Navigation() {
  // const selectScene0 = useStore(state => state.selectScene0)
  const videoPath = window.location.href + '/video/composite/abstract1.mp4'

  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src={videoPath} type="video/mp4" />
      </video>

      {/* <div class="content">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
        <button id="myBtn" onClick="myFunction()">Pause</button>
      </div> */}
    </>
  )
}