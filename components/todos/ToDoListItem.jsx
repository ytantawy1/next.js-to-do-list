import {cn} from '@/lib/utils/mergeCss'
import { EditTask } from '../dialogs/EditTask'
function ToDoListItem({children, className, uid, payload}) {
	const {task, category} = payload
	return (
		<aside
			className={cn(
				'odd:bg-neutral-50 even:bg-gray-100 flex justify-between   py-4 px-3 rounded',
				className
			)}>
			<div>
				<p className="text-xs text-neutral-400">{category}</p>
				<p className="text-sm text-neutral-600">{task}</p>
			</div>
			<div className="flex flex-col gap-y-1 text-[10px] items-center">
				<button className="border border-neutral-500 text-neutral-600 px-2 py-0.5 rounded">
					Delete
				</button>
				<EditTask uid={uid} payload={payload} />
			</div>
		</aside>
	)
}

export {ToDoListItem}
