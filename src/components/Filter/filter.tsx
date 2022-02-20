import React, { useState, useContext, SyntheticEvent } from "react"
import { X } from "react-feather"
import { filterByAllSelected, createListOfTypes } from "../../utils/functions"
import { ThemeContext } from "../../context/ThemeContext"
import buttons from "../../styles/buttons.module.css"
import helpers from "../../styles/helpers.module.css"

type Product = {
  id: number
  layout: string
  title: string
  category: string
  path: string
  excerpt: string
  image: string
  imageLarge: string
  productAttributeTitleOne: string
  productAttributeTitleTwo: string
  productAttributeTitleThree: string
  productAttributeTitleFour: string
  productAttributeValueOne: string
  productAttributeValueTwo: string
  productAttributeValueThree: string
  productAttributeValueFour: string
}

type FilterProps = {
  items: Array<Product>
  filteredLength: number
  setItemsState: (newItemsState: Array<Product>) => void
  types: Array<{
    title: string
    uid: string
  }>
}

type FieldsetsProps = {
  items: Array<Product>
  filteredLength: number
  setItemsState: (newItemsState: Array<Product>) => void
  setFiltersSelected: (newFiltersSelected: number) => void
  types: Array<{
    title: string
    uid: string
  }>
  filtersSelected: number
}

type Checkbox = {
  title: string
  count: number
  id: number
  isChecked: boolean
}

type FieldsetTypeProps = {
  title: string
  uid: string
  checkboxes: [Checkbox]
}

type Fieldset = {
  title: string
  items: Array<Product>
  checkboxes: [Checkbox]
  fieldsetsState: [FieldsetTypeProps]
  filtersSelected: number
  filteredLength: number
  setFieldsetsState: (newFieldsetsState: [FieldsetTypeProps]) => void
  setItemsState: (newItemsState: Array<Product>) => void
  setFiltersSelected: (newFiltersSelected: number) => void
}

const Fieldset = ({
  title,
  items,
  checkboxes,
  fieldsetsState,
  setFieldsetsState,
  setItemsState,
  filtersSelected,
  filteredLength,
  setFiltersSelected,
}: Fieldset) => {
  const handleCheck = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.name
    const checked = target.checked

    fieldsetsState.map(({ checkboxes }) => {
      return checkboxes.forEach(checkbox => {
        if (checkbox.title === value) checkbox.isChecked = checked
      })
    })

    setFieldsetsState(fieldsetsState)

    const checkedItems = fieldsetsState
      .map(({ checkboxes }) => checkboxes)
      .flat()
      .filter(({ isChecked }) => isChecked)
      .map(({ title }) => title)

    const checkedTypes = fieldsetsState.map(({ uid }) => uid).flat()

    if (!checkedItems.length) {
      setItemsState(items)
      setFiltersSelected(0)
      return
    }

    const newItemsState = filterByAllSelected(items, checkedTypes, checkedItems)

    setItemsState(newItemsState)
    setFiltersSelected(checkedItems.length)
  }

  const handleCheckAll = () => {
    fieldsetsState.map(({ checkboxes }) => {
      return checkboxes.forEach(checkbox => {
        checkbox.isChecked = false
      })
    })

    setItemsState(items)
    setFiltersSelected(0)
  }

  return (
    <fieldset className="mt-4">
      <legend className="mt-4 mb-1 font-sans text-lg font-semibold">
        {title}
      </legend>
      <div key={`category-all`}>
        <label
          className={`${helpers.checkboxContainer} flex items-center mb-2 font-sans`}
        >
          <input
            type="checkbox"
            className="form-checkbox"
            checked={filtersSelected < 1 || filteredLength === items.length}
            id="All"
            name="All"
            onChange={() => handleCheckAll()}
          />
          <div className={helpers.checkbox}></div>
          <span className="flex-grow ml-3 capitalize">All</span>
        </label>
      </div>
      {checkboxes.map(({ id, title, count, isChecked }, i) => (
        <div key={`category-${i}`}>
          <label
            className={`${helpers.checkboxContainer} flex items-center mb-2 font-sans`}
          >
            <input
              data-testid="filterCheckbox"
              type="checkbox"
              className="form-checkbox"
              id={`${title}-${id}`}
              name={title}
              checked={isChecked}
              onChange={e => handleCheck(e)}
            />
            <div className={helpers.checkbox}></div>
            <span className="flex-grow ml-3 capitalize">{title}</span>
            <span className="font-semibold text-textLight">{count}</span>
          </label>
        </div>
      ))}
    </fieldset>
  )
}

const Fieldsets = ({
  types,
  items,
  filteredLength,
  setItemsState,
  setFiltersSelected,
  filtersSelected,
}: FieldsetsProps) => {
  const fieldsetTypes = createListOfTypes(items, types)

  const fieldsets = fieldsetTypes.map(
    ({ title, uid, checkboxes }: FieldsetTypeProps) => {
      return {
        title,
        uid,
        checkboxes: checkboxes.map(({ title, count }, i) => {
          return {
            title,
            count,
            id: i,
            isChecked: false,
          }
        }),
      }
    }
  )

  const [fieldsetsState, setFieldsetsState] = useState(fieldsets)

  const handleClearAll = (e: SyntheticEvent) => {
    e.preventDefault()
    const emptyFieldsets = fieldsetTypes.map(
      ({ title, uid, checkboxes }: FieldsetTypeProps) => {
        return {
          title,
          uid,
          checkboxes: checkboxes.map(({ title, count }, i) => {
            return {
              title,
              count,
              id: i,
              isChecked: false,
            }
          }),
        }
      }
    )

    setFieldsetsState(emptyFieldsets)
    setFiltersSelected(0)
    setItemsState(items)
  }

  if (!fieldsets.length) return null

  return (
    <>
      {fieldsetsState.map(
        ({ title, checkboxes }: FieldsetTypeProps, i: number) => (
          <Fieldset
            key={`fieldset-${i}`}
            title={title}
            items={items}
            filteredLength={filteredLength}
            checkboxes={checkboxes}
            fieldsetsState={fieldsetsState}
            filtersSelected={filtersSelected}
            setFieldsetsState={setFieldsetsState}
            setItemsState={setItemsState}
            setFiltersSelected={setFiltersSelected}
          />
        )
      )}
      {filtersSelected > 0 && (
        <button className="mt-2" onClick={e => handleClearAll(e)}>
          Clear All
        </button>
      )}
    </>
  )
}

export const Filter = ({
  items,
  setItemsState,
  types,
  filteredLength,
}: FilterProps) => {
  const { filterOpen, filterOpenToggle } = useContext(ThemeContext)
  const [filtersSelected, setFiltersSelected] = useState(0)

  return (
    <>
      <button
        className={`${buttons.btn} ${buttons.btnSecondaryOutline} w-full mb-2 lg:hidden`}
        onClick={() => filterOpenToggle(true)}
      >
        Filter
      </button>
      {filterOpen && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-50 lg:hidden"></div>
      )}
      <form
        onClick={e => {
          // Prevent body click removal of open state
          e.stopPropagation()
        }}
        className={`${
          filterOpen ? "inline-block" : "hidden"
        } fixed overflow-scroll top-0 right-0 bg-white h-screen z-999 pt-4 pr-8 pl-8 pb-8 min-w-3/4 lg:block lg:static lg:h-auto`}
      >
        <div className="flex justify-between cursor-pointer itemscenter lg:hidden">
          <h4>Filter by</h4>
          <X onClick={() => filterOpenToggle(false)} />
        </div>
        {filtersSelected > 0 && (
          <>
            <p className="mb-4 lg:hidden">
              Filters selected: {filtersSelected}
            </p>
          </>
        )}
        <Fieldsets
          types={types}
          items={items}
          filteredLength={filteredLength}
          setItemsState={setItemsState}
          setFiltersSelected={setFiltersSelected}
          filtersSelected={filtersSelected}
        />
      </form>
    </>
  )
}
