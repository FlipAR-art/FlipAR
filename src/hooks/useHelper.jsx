import { 
  GizmoHelper, 
  GizmoViewport, 
  GizmoViewcube, 
  PresentationControls,
  Grid
} from '@react-three/drei';

const MyGrid = () => (<Grid />);
const Presentation = ({children}) => {
  return (
    <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={false} // Snap-back to center (can also be a spring config)
      speed={1} // Speed factor
      zoom={10} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[0, Math.PI / 2]} // Vertical limits
      azimuth={[-Infinity, Infinity]} // Horizontal limits
      config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      //domElement={events.connected} // The DOM element events for this controller will attach to
    >
      {children}
    </PresentationControls>
  )
}
const MyGizmoHelper = (props) => {
  
  return (
    <GizmoHelper
        {...props}
        alignment="bottom-right" // widget alignment within scene
        color="white"
        colorX="red"
        colorY="green"
        colorZ="blue"
        controls="OrbitControls"
        faces={[
          'Right',
          'Left',
          'Top',
          'Bottom',
          'Front',
          'Back'
        ]}
        gizmo="GizmoViewcube"
        hoverColor="lightgray"
        labelColor="black"
        marginX={80}
        marginY={80}
        opacity={1}
        strokeColor="gray"
        textColor="black"
        //margin={[80, 80]} // widget margins (X, Y)
        //onUpdate={/* called during camera animation  */}
        //onTarget={/* return current camera target (e.g. from orbit controls) to center animation */}
        //renderPriority={/* use renderPriority to prevent the helper from disappearing if there is another useFrame(..., 1)*/}
      >
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        <GizmoViewcube />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>

  )
};
export {MyGizmoHelper, Presentation, MyGrid};