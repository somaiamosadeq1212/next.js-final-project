export default function EmptyState(){
    return(
        <div className="rounded-xl border py-16 text-center">
            <h2 className="text-2xl font-bold">
                No opportunities found
            </h2>

            <p className="mt-3 text-gray-600">
                Try changing your search or filters.
            </p>
        </div>
    )
}