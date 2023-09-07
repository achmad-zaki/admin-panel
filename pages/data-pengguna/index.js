import Layouts from '@/components/Layouts'
import { Pengguna } from '@/Data'
import { FaEye, FaTrash } from "react-icons/fa"
import ReactPaginate from 'react-paginate'

const DataPengguna = () => {
  const tableHead = [
    'No',
    'Nama',
    'Email',
    'Alamat',
    'No. Telp',
    'action'
  ]

  return (
    <Layouts>
      <div className='overflow-x-auto rounded-md w-full'>
        <table className="table-auto border text-left">
          <thead className='bg-gray-200 uppercase'>
            <tr>
              {tableHead.map((item, index) => (
                <th key={index} className='p-4 text-sm font-bold text-dark'>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white'>
            {Pengguna.map((item, index) => (
              <tr key={index} className='text-sm border'>
                <td className='p-4 border text-center'>{index + 1}</td>
                <td className='p-4'>{item.name}</td>
                <td className='p-4'>{item.email}</td>
                <td className='p-4'>{item.alamat}</td>
                <td className='p-4'>{item.no_telp}</td>
                <td className='p-4 text-white text-center border'>
                  <button className='bg-primary p-3 rounded-md'><FaEye /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <ReactPaginate className="border flex" />
    </Layouts>
  )
}

export default DataPengguna