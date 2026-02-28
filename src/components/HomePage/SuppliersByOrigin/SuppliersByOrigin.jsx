import React from 'react'
import OriginCard from './OriginCard'
import { originCardData } from './originCardData'

function SuppliersByOrigin() {
    return (
        <>
            <h3 className="text-[24px] font-semibold">Suppliers by region</h3>

            <div className="origin-cards-container flex flex-wrap gap-2.5">
                {originCardData.map(originData => (
                    <OriginCard key={originData.id} originData={originData} />
                ))}
            </div>
        </>
    )
}

export default SuppliersByOrigin