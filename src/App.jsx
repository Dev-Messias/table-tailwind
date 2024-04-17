import { TbEye } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";

function App() {

  return (
    <div className="p-5 h-screen bg-gray-100" >

      <h1 className="text-4xl mb-10 font-bold text-rose-600" >Tabela - TailwindCSS</h1>


     <div className="overflow-auto rounded-lg hidden md:block shadow" >
        <table className="w-full" >
            <thead className="bg-gray-50 border-b-2 border-gra" >
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Nome</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Data</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">Opções</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-100" >
              <tr className="bg-white" >
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" ><a href="#" className="font-bold text-blue-500 hover:underline">00101</a></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >Maria</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >
                  <span className="p-1.5 text-xs font-bold  tracking-wide text-green-800 bg-green-200 rounded-lg bg-opacity-60" >true</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >16/04/2022</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >
                    <div className="flex flex-row gap-1" >
                      <button className="bg-green-400 p-1 rounded-lg" >
                        <TbEye size={20} color="#fff" />
                      </button>

                      <button className="bg-yellow-400 p-1 rounded-lg" >
                        <CiEdit size={20} color="#fff" />
                      </button>
                    </div>
                </td>
              </tr>


              <tr className="bg-white" >
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" ><a href="#" className="font-bold text-blue-500 hover:underline">00101</a></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >Maria</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >
                  <span className="p-1.5 text-xs font-bold  tracking-wide text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60" >false</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >16/04/2022</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >
                  <div className="flex flex-row gap-1" >
                    <button className="bg-green-400 p-1 rounded-lg" >
                      <TbEye size={20} color="#fff" />
                    </button>

                    <button className="bg-yellow-400 p-1 rounded-lg" >
                      <CiEdit size={20} color="#fff" />
                    </button>
                  </div>
                </td>
              </tr>

          
            </tbody>
          </table>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden" >
        <div className="bg-white space-y-3 p-4 rounded-lg shadow" >
          <div className="flex items-center space-x-2 text-sm">
             <div>
              <a href="#" className="text-blue-500 font-bold hover:underline" >#01010</a>
             </div>
             <div className="text-gray-500 font-semibold " >- 14/03/2022 -</div>
             <div>
               <span className="p-1.5 text-xs font-bold  tracking-wide text-green-800 bg-green-200 rounded-lg bg-opacity-60" >true</span>
             </div>
          </div>

          <div className="text-sm text-gray-700" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque dicta sapiente incidunt, harum rerum provident earum unde nesciunt reiciendis laborum in doloribus laboriosam saepe, aspernatur nisi nulla rem aut.</div>
          <div className="flex flex-row gap-3" >
              <button className="bg-green-400 p-1 rounded-lg" >
                <TbEye size={20} color="#fff" />
              </button>

              <button className="bg-yellow-400 p-1 rounded-lg" >
                <CiEdit size={20} color="#fff" />
              </button>
          </div>
        </div>

        <div className="bg-white space-y-3 p-4 rounded-lg shadow" >
          <div className="flex items-center space-x-2 text-sm">
             <div>
              <a href="#" className="text-blue-500 font-bold hover:underline" >#01010</a>
             </div>
             <div className="text-gray-500 font-semibold " >- 14/03/2022 -</div>
             <div>
             <span className="p-1.5 text-xs font-bold  tracking-wide text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60" >false</span>
             </div>
          </div>

          <div className="text-sm text-gray-700" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque dicta sapiente incidunt, harum rerum provident earum unde nesciunt reiciendis laborum in doloribus laboriosam saepe, aspernatur nisi nulla rem aut.</div>
          <div className="flex flex-row gap-3" >
              <button className="bg-green-400 p-1 rounded-lg" >
                <TbEye size={20} color="#fff" />
              </button>

              <button className="bg-yellow-400 p-1 rounded-lg" >
                <CiEdit size={20} color="#fff" />
              </button>
          </div>
        </div>

        <div className="bg-white space-y-3 p-4 rounded-lg shadow" >
          <div className="flex items-center space-x-2 text-sm">
             <div>
              <a href="#" className="text-blue-500 font-bold hover:underline" >#01010</a>
             </div>
             <div className="text-gray-500 font-semibold " >- 14/03/2022 -</div>
             <div>
               <span className="p-1.5 text-xs font-bold  tracking-wide text-green-800 bg-green-200 rounded-lg bg-opacity-60" >true</span>
             </div>
          </div>

          <div className="text-sm text-gray-700" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque dicta sapiente incidunt, harum rerum provident earum unde nesciunt reiciendis laborum in doloribus laboriosam saepe, aspernatur nisi nulla rem aut.</div>
          <div className="flex flex-row gap-3" >
              <button className="bg-green-400 p-1 rounded-lg" >
                <TbEye size={20} color="#fff" />
              </button>

              <button className="bg-yellow-400 p-1 rounded-lg" >
                <CiEdit size={20} color="#fff" />
              </button>
          </div>
        </div>

        
     </div>
      
    </div>
  )
}

export default App
