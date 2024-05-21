export default function ModalNotification({notif}) {
    if (!notif) return null
    return (
        <div className="notification w-52 h-96 bg-white shadow-xl absolute -translate-x-full z-50 rounded-xl">
            <p className="m-3">Notifikasi Surat</p>
        </div>
    )
}