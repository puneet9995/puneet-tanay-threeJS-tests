import { Box, useGLTF } from "@react-three/drei";
import * as three from "three";
import {} from "@react-three/fiber";
import { useState, useEffect, useMemo, useRef, Suspense } from "react";

const Model = ({ ...props }) => {
  const gltf = useGLTF("" + props.url);
  const ref = useRef();
  const ref1 = useRef();
  const [visibleBox, setVisibleBox] = useState(false);
  useEffect(() => {
    let bb = new three.Box3().setFromObject(ref.current);
    let size = bb.getSize(new three.Vector3());
    if (ref1.current) {
      ref1.current.scale.x = size.x;
      ref1.current.scale.y = size.y;
      ref1.current.scale.z = size.z;
      ref1.current.position.y += size.y / 2; // * props.pivotY;
    }
  }, [gltf]);

  return (
    <>
      <primitive
        ref={ref}
        dispose={null}
        object={gltf.scene.clone()}
        onPointerOver={() => setVisibleBox(true)}
        onPointerOut={() => setVisibleBox(false)}
        {...props}
      />

      <mesh
        ref={ref1}
        position={props.position}
        castShadow={false}
        onClick={() => props.handleDelete(props.myKey)}
      >
        <boxGeometry />
        <meshStandardMaterial
          opacity={visibleBox ? 0.3 : 0}
          color="orange"
          transparent
        />
      </mesh>
    </>
  );
};

export { Model };
