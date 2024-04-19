import React, { useState } from 'react';

function App() {
  const [analystName, setAnalystName] = useState("");
  const [project, setProject] = useState("");
  const [showAnalystOptions, setShowAnalystOptions] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const [filteredAnalystOptions, setFilteredAnalystOptions] = useState([]);
  const [filteredProjectOptions, setFilteredProjectOptions] = useState([]);
  const [additionalInputs, setAdditionalInputs] = useState([]);

  const analystOptions = ["Purwa Dazoratun", "Kevin Unedo"]; // List of analyst options
  const projectOptions = ["Icon+", "Iconhub", "Testing Project"]; // List of project options

  const handleAnalystInputChange = (e) => {
    const inputValue = e.target.value;
    setAnalystName(inputValue);
    setFilteredAnalystOptions(analystOptions.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    ));
    setShowAnalystOptions(true);
  };

  const handleProjectInputChange = (e) => {
    const inputValue = e.target.value;
    setProject(inputValue);
    setFilteredProjectOptions(projectOptions.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    ));
    setShowProjectOptions(true);
  };

  const handleAnalystOptionClick = (option) => {
    setAnalystName(option);
    setShowAnalystOptions(false);
  };

  const handleProjectOptionClick = (option) => {
    setProject(option);
    setShowProjectOptions(false);
  };

  const handleAnalystInputClick = () => {
    setShowAnalystOptions(true);
  };

  const handleProjectInputClick = () => {
    setShowProjectOptions(true);
  };

  const handleAddInputColumn = () => {
    setAdditionalInputs([...additionalInputs, { namaAnggota: "", urlTask: "", statusTask: "" }]);
  };

  const handleInputChange = (index, type, value) => {
    const updatedInputs = [...additionalInputs];
    updatedInputs[index][type] = value;
    setAdditionalInputs(updatedInputs);
  };

  const handleRemoveInputColumn = (index) => {
    const updatedInputs = [...additionalInputs];
    updatedInputs.splice(index, 1);
    setAdditionalInputs(updatedInputs);
  };

  return (
    <div className="container mx-auto mt-4 px-4 pt-3 pb-4 rounded-lg border border-gray-200">
      <strong className="text-lg px-4">Daily Scrum</strong>
      <hr className="my-2 border-gray-200" />
      <div className='px-4'>
        <div className="mt-2 flex">
          <div className="flex-1 pr-2">
            <h3 className='mt-3'>Analyst Name</h3>
            {/* Analyst Name Input */}
          </div>
          <div className="flex-1 pl-2 mt-3">
            <h5 className=''>Project</h5>
            {/* Project Input */}
          </div>
        </div>
        <div className='mt-4 py-4 border border-gray-300 rounded-md'>
          <h5 className='px-4 mb-4'>Target Hari Ini</h5>
          <hr className="border-gray-200 w-full m-0" />
          <div className='bg-slate-100 grid grid-cols-4 gap-4 p-4'>
            <div className="col-span-1">
              <p className="p-2">Nama Anggota</p>
            </div>
            <div className="col-span-1">
              <p className="p-2">Url Task</p>
            </div>
            <div className="col-span-1 ">
              <p className="p-2">Status Task</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <button onClick={handleAddInputColumn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                +
              </button>
            </div>
            {additionalInputs.map((input, index) => (
              <React.Fragment key={`input-${index}`}>
                <div className="col-span-1">
                  <input
                    type="text"
                    value={input.namaAnggota}
                    onChange={(e) => handleInputChange(index, 'namaAnggota', e.target.value)}
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    value={input.urlTask}
                    onChange={(e) => handleInputChange(index, 'urlTask', e.target.value)}
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    value={input.statusTask}
                    onChange={(e) => handleInputChange(index, 'statusTask', e.target.value)}
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <button onClick={() => handleRemoveInputColumn(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    -
                  </button>
                </div>
              </React.Fragment>
            ))}
          </div>
          <hr className="border-gray-200 w-full m-0" />
        </div>
      </div>
    </div>
  );
}

export default App;
