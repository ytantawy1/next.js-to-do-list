'use server'
import {revalidatePath} from 'next/cache'

import {ref, remove} from 'firebase/database'

import {db} from '@/lib/firebase/firebaseInit'
// formData  = formData object name/value pairs from the form
export async function deleteAction(prevState, formData) {
	const uid = formData.get('uid')
	const response = await removeFromRTDB(uid)
    revalidatePath("/demo")
	return {message: response}
}

// Firebase NoSql SQL ....
async function removeFromRTDB(uid) {
    const path = `todos/${uid}`
    const dbRef = ref(db, path)
    try {
        await remove(dbRef)
        return "success"
    } catch (error) {
        return "failure"
    }
}
	

