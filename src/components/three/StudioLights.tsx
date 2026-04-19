import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="studio-lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer form="rect" intensity={10} scale={10} rotation-y={Math.PI / 2} position={[-10, 5, -5]} />
                    <Lightformer form="rect" intensity={10} scale={10} rotation-y={Math.PI / 2} position={[10, 0, 1]} />
                </group>
            </Environment>
            <spotLight angle={0.15} decay={0} intensity={Math.PI * 0.2} position={[0, -25, 10]} />
            <spotLight angle={0.15} decay={0.1} intensity={Math.PI * 2} position={[0, 15, 5]} />
        </group>
    );
};

export default StudioLights;
