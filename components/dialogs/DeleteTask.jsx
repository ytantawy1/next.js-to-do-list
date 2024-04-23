import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { DeleteTaskForm } from '../forms/DeleteTaskForm'

import {cn} from '@/lib/utils/mergeCss'

function DeleteTask({children, className, uid, payload}) {
	return (
		<Dialog className="">
			<DialogTrigger className="bg-red-600 text-white w-full p-2.5 rounded-lg mt-3 font-semibold">
				Delete
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Delete</DialogTitle>
						<DeleteTaskForm uid={uid} payload={payload} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export {DeleteTask}
