import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'
import { truncateText } from '../../../helpers/truncateText'
import DrawerEdit from './DrawerAdmin'
import AlertDialog from '../AlertDialog/AlertDialog'
import { AiOutlineEdit } from 'react-icons/ai'

const TableGeneric = ({
  caption,
  columns = [],
  rows = [],
  isEditable = true,
  isRemovable = true,
  handleDelete,
  handleUpdate
}) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>{caption}</TableCaption>
          <Thead>
            <Tr>
              {isEditable && <Th>Editar</Th>}
              {isRemovable && <Th>Borrar</Th>}
              {columns.map((column, index) => (
                <Th key={index}>{column}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => (
              <Tr key={index}>
                {isEditable && (
                  <Td>
                    <DrawerEdit
                      colorScheme={'blue'}
                      header={'Panel de edición'}
                      initialForm={row}
                      handleAction={handleUpdate}
                      icon={<AiOutlineEdit />}
                    />
                  </Td>
                )}
                {isRemovable && (
                  <Td>
                    <AlertDialog id={row?.id} handleDelete={handleDelete} />
                  </Td>
                )}
                {columns.map((column, columnIndex) => (
                  <Td key={columnIndex}>{truncateText(row[column] + '')}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableGeneric
