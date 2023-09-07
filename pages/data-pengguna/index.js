import Layouts from '@/components/Layouts'
import { Dummy } from '@/dummy'
import { FaEye } from "react-icons/fa"
import ReactPaginate from 'react-paginate'

export default function DataPengguna() {
  const tableHead = [
    'Nama',
    'Email',
    'Alamat',
    'No. Telp',
    'action'
  ]

  return (
    <Layouts>
      <div className='bg-white rounded-md'>
        <header className='px-5 py-4 border-b border-slate-100 bg-primary rounded-t-md'>
          <h2 className='font-semibold text-white'>Tabel Pengguna Aplikasi</h2>
        </header>
        <div className="p-3">
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead className='text-xs font-semibold uppercase text-dark bg-gray-300'>
                <tr>
                  {tableHead.map((item, index) => (
                    <th key={index} className='px-4 py-3 whitespace-nowrap'>
                      <div className='font-semibold text-left text-dark'>{item}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-slate-100'>
                {Dummy.map((item, index) => (
                  <tr key={index}>
                    <td className='px-4 py-3 whitespace-nowrap'>
                      <div className="text-left">{item.name}</div>
                    </td>
                    <td className='p-2 whitespace-nowrap'>
                      <div className="text-left">{item.email}</div>
                    </td>
                    <td className='p-2 whitespace-nowrap'>
                      <div className="text-left">{item.alamat}</div>
                    </td>
                    <td className='p-2 whitespace-nowrap'>
                      <div className="text-left">{item.no_telp}</div>
                    </td>
                    <td className='text-white p-2 text-center'>
                      <button className='bg-primary p-4 rounded-md'><FaEye size={15} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layouts>
  )
}