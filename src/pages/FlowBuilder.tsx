import React from 'react';
import ReactFlow, { 
  Background, 
  Controls,
  MiniMap
} from 'react-flow-renderer';

export const FlowBuilder = () => {
  const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Start' },
      position: { x: 250, y: 25 },
    },
  ];

  return (
    <div className="h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Flow Builder</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700">
                Save Flow
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-[calc(100vh-4rem)]">
        <ReactFlow
          nodes={initialNodes}
          edges={[]}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};