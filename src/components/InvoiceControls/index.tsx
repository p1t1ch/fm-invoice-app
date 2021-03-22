import React from 'react'

export interface InvoiceControlsHandlers {
  onEdit: () => void
  onDelete: () => void
  onMarkAsPaid: () => void
}

export type InvoiceControlsProps = InvoiceControlsHandlers & React.HTMLProps<HTMLDivElement>

const InvoiceControls = ({ onEdit, onDelete, onMarkAsPaid, className = '', ...props }: InvoiceControlsProps) => {
  return (
    <div className={`grid grid-flow-col gap-2 justify-center ${className}`} {...props}>
      <button className="btn btn-secondary" onClick={onEdit}>
        Edit
      </button>
      <button className="btn btn-delete" onClick={onDelete}>
        Delete
      </button>
      <button className="btn btn-primary" onClick={onMarkAsPaid}>
        Mark as Paid
      </button>
    </div>
  )
}

export default InvoiceControls
