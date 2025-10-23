import { useState, useCallback } from 'react'
import {TextNode} from "./components/TextNode"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Background,
  Controls,
  MiniMap,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
const nodeTypes = {
  textUpdater: TextNode,
};
const initialNodes = [
  {
    id: 'n1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { label: 123 },
  },
];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  return (<>
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        fitView
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  </>
  );
}

export default App
