import moveUp from '../../assets/icons/moveUp.svg'
import moveDown from '../../assets/icons/moveDown.svg'
import deleteIcon from '../../assets/icons/trash.svg'
import editIcon from '../../assets/icons/pencil.svg'
import Option from './Option'

export default function OptionsDropdown() {
  return (
    <div className='flex flex-col absolute left-8 -top-4 h-fit w-max text-nowrap bg-slate-600 text-xs rounded-md'>
      <Option icon={editIcon} text='Edit' />
      <Option icon={deleteIcon} text='Delete' />
      <Option icon={moveUp} text='Move Up' />
      <Option icon={moveDown} text='Move Down' />
    </div>
  )
}
