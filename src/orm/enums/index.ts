// Статуси для рукописів (Script)
export enum ScriptStatus {
  DRAFT = 'чернетка',
  APPROVED = 'схвалено',
  REJECTED = 'відхилено',
  REVISION = 'доопрацювання'
}

// Ролі співробітників у роботі над рукописом (ScriptEmployee)
export enum ScriptRole {
  EDITOR = 'редактор',
  CORRECTOR = 'коректор',
  ILLUSTRATOR = 'ілюстратор',
  TYPESETTER = 'верстальник'
}

// Типи замовлень (Order)
export enum OrderType {
  WHOLESALE = 'оптове',
  RETAIL = 'роздрібне'
}

// Статуси замовлень (Order)
export enum OrderStatus {
  UNPAID = 'не оплачено',
  PAID = 'оплачено',
  SENT = 'відправлено',
  DELIVERED = 'доставлено',
  CANCELLED = 'скасовано'
}