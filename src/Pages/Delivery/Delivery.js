import React from 'react'
import { DeliveryHeader } from '../../Components/DeliveryHeader/DeliveryHeader'
import { DeliveryAbout } from '../../Components/DeliveryAbout/DeliveryAbout'
import { DeliveryServices } from '../../Components/DeliveryServices/DeliveryServices'
import { DeliveryStore } from '../../Components/DeliveryStore/DeliveryStore'
import { DeliveryContact } from '../../Components/DeliveryContact/DeliveryContact'

export function Delivery() {
    

    return (
        <>
            <DeliveryHeader/>
            <DeliveryAbout/>
            <DeliveryServices/> 
            <DeliveryStore/>
            <DeliveryContact/>
        </>
    )
}
