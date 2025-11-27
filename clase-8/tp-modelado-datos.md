# Ejercicio: Modelado de Datos (MySQL)

## Objetivo
Diseñar un modelo de datos simple utilizando **tres entidades**, aplicando **tipos de datos apropiados** en MySQL. El ejercicio está pensado para que investigues y elijas los tipos por tu cuenta.

---

## Enunciado

Debes crear **tres tablas** relacionadas:

### 1. `courses`
Representa cursos online.

Campos sugeridos:
- `id` — debe ser un UUID
- `title`
- `description`
- `price`
- `duration_hours`
- `level`
- `created_at`

> 🔍 **Pista:** Pensá qué tipo de dato usar para representar dinero sin perder precisión.  
> 🔍 ¿`DATETIME` o `TIMESTAMP`? ¿Cuál conviene para registros de creación?

---

### 2. `students`
Representa usuarios del sistema.

Campos sugeridos:
- `id` — UUID
- `full_name`
- `email`
- `birth_date`
- `is_active`
- `registered_at`

> 🔍 **Pista:** Averiguá cuál es el tipo recomendado para correos electrónicos.  
> 🔍 ¿Cómo almacena MySQL valores booleanos realmente?

---

### 3. `enrollments`
Relaciona estudiantes con cursos.

Campos sugeridos:
- `id` — UUID  
- `student_id` — FK  
- `course_id` — FK  
- `payment_status`
- `final_grade`
- `enrolled_at`

> 🔍 **Pista:** ¿Qué tipo de dato usarías para notas finales?  
> 🔍 ¿Cómo representarías un estado de pago estándar? Pensá en ENUM.

---

## 🧪 Requisitos
1. Todas las tablas deben usar **UUID como Primary Key**.  
2. Debés definir correctamente las **Foreign Keys**.  
3. Elegir y justificar cada tipo de dato.  

---

## Formato de entrega
Pensar en un archivo `.sql` que contenga:
- Creación de las tablas  
- Tipos de dato elegidos  
- Restricciones utilizadas  

Y un documento breve explicando **por qué** elegiste cada tipo.  

---

¡Éxitos! Investigar tipos de datos es una de las habilidades más valiosas en bases de datos reales.
