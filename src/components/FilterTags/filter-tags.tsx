import React, { useState } from "react"
import { X } from "react-feather"
import { filterBySelected, createListOfTypes } from "../../utils/functions"

type FilterProps = {
  items: Array<{}>
  setItemsState: (newItemsState: Array<{}>) => void
  types: Array<{
    title: string
    uid: string
  }>
}

type TagsProps = {
  items: Array<{}>
  setItemsState: (newItemsState: Array<{}>) => void
  types: Array<{
    title: string
    uid: string
  }>
}

type TagTypeProps = {
  title: string
  uid: string
  checkboxes: [Tag]
  tags: [Tag]
}

type Tag = {
  title: string
  count: number
  id: number
  isChecked: boolean
}

type TagProps = {
  items: Array<{}>
  tags: [Tag]
  fieldsetsState: [TagTypeProps]
  setFieldsetsState: (newFieldsetsState: [TagTypeProps]) => void
  setItemsState: (newItemsState: Array<{}>) => void
}

const Tags = ({
  items,
  tags,
  fieldsetsState,
  setFieldsetsState,
  setItemsState,
}: TagProps) => {
  const handleCheck = (name: string, isChecked: boolean) => {
    fieldsetsState.map(({ tags }) => {
      return tags.forEach(tag => {
        if (tag.title === name) tag.isChecked = !isChecked
      })
    })

    setFieldsetsState(fieldsetsState)

    const checkedItems = fieldsetsState
      .map(({ tags }) => tags)
      .flat()
      .filter(({ isChecked }) => isChecked)
      .map(({ title }) => title)

    const checkedTypes = fieldsetsState.map(({ uid }) => uid).flat()

    if (!checkedItems.length) {
      setItemsState(items)
      return
    }

    const newItemsState = filterBySelected(items, checkedTypes, checkedItems)

    setItemsState(newItemsState)
  }

  const handleClearAll = () => {
    fieldsetsState.map(({ tags }) => {
      return tags.forEach(tag => {
        tag.isChecked = false
      })
    })

    setFieldsetsState(fieldsetsState)
    setItemsState(items)
  }

  const hasCheckedItems = Object.values(tags).some(({ isChecked }) => isChecked)

  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-wrap items-center justify-center col-span-12 lg:flex-col lg:items-start">
        <button
          key="category-clear-all"
          onClick={handleClearAll}
          className={`flex items-center tracking-widest uppercase cursor-pointer ${
            hasCheckedItems ? "" : "underline font-bold"
          }`}
        >
          <span>All</span>
        </button>
        {tags
          .slice(0)
          .reverse()
          .map(({ title, isChecked }, i) => (
            <button
              key={`category-${i}`}
              onClick={() => handleCheck(title, isChecked)}
              className="flex items-center ml-4 tracking-widest uppercase cursor-pointer lg:ml-0 lg:mt-2"
            >
              <span>{title}</span>
              {isChecked && <X className="ml-4" size="16" />}
            </button>
          ))}
      </div>
    </div>
  )
}

const TagsContainer = ({ types, items, setItemsState }: TagsProps) => {
  const tagTypes = createListOfTypes(items, types)
  const tags = tagTypes.map(({ title, uid, checkboxes }: TagTypeProps) => {
    return {
      title,
      uid,
      tags: checkboxes.map(({ title, count }, i) => {
        return {
          title,
          count,
          id: i,
          isChecked: false,
        }
      }),
    }
  })

  const [tagsState, setTagsState] = useState(tags)

  if (!tags.length) return null

  return (
    <>
      {tagsState.map(({ tags }: TagTypeProps, i: number) => (
        <Tags
          key={`fieldset-${i}`}
          items={items}
          tags={tags}
          fieldsetsState={tagsState}
          setFieldsetsState={setTagsState}
          setItemsState={setItemsState}
        />
      ))}
    </>
  )
}

export const FilterTags = ({ items, setItemsState, types }: FilterProps) => {
  return (
    <div>
      <TagsContainer
        types={types}
        items={items}
        setItemsState={setItemsState}
      />
    </div>
  )
}
