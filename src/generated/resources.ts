import latest_gui_title_minecraft from 'mc-assets/dist/other-textures/latest/gui/title/minecraft.png'
import other_textures_1_19_gui_icons from 'mc-assets/dist/other-textures/1.19/gui/icons.png'
import other_textures_latest_gui_widgets from 'mc-assets/dist/other-textures/latest/gui/widgets.png'
import other_textures_latest_gui_bars from 'mc-assets/dist/other-textures/latest/gui/bars.png'
import latest_gui_container_inventory from 'mc-assets/dist/other-textures/latest/gui/container/inventory.png'
import latest_gui_container_shulker_box from 'mc-assets/dist/other-textures/latest/gui/container/shulker_box.png'
import latest_gui_container_generic_54 from 'mc-assets/dist/other-textures/latest/gui/container/generic_54.png'
import latest_gui_container_furnace from 'mc-assets/dist/other-textures/latest/gui/container/furnace.png'
import latest_gui_container_crafting_table from 'mc-assets/dist/other-textures/latest/gui/container/crafting_table.png'
import latest_gui_container_dispenser from 'mc-assets/dist/other-textures/latest/gui/container/dispenser.png'
import latest_gui_container_hopper from 'mc-assets/dist/other-textures/latest/gui/container/hopper.png'
import latest_gui_container_horse from 'mc-assets/dist/other-textures/latest/gui/container/horse.png'
import latest_gui_container_villager2 from 'mc-assets/dist/other-textures/latest/gui/container/villager2.png'
import latest_gui_container_enchanting_table from 'mc-assets/dist/other-textures/latest/gui/container/enchanting_table.png'
import latest_gui_container_anvil from 'mc-assets/dist/other-textures/latest/gui/container/anvil.png'
import latest_gui_container_beacon from 'mc-assets/dist/other-textures/latest/gui/container/beacon.png'

export const appReplacableResources: { [key in Keys]: { content: any, resourcePackPath: string, cssVar?: string, cssVarRepeat?: number } } = {

  'latest_gui_title_minecraft': {
    content: latest_gui_title_minecraft,
    resourcePackPath: 'minecraft/textures/gui/title/minecraft.png',
    ...{"cssVar":"--title-gui"}
  },

  'other_textures_1_19_gui_icons': {
    content: other_textures_1_19_gui_icons,
    resourcePackPath: 'minecraft/textures/gui/icons.png',
    ...{"cssVar":"--gui-icons","cssVarRepeat":2}
  },

  'other_textures_latest_gui_widgets': {
    content: other_textures_latest_gui_widgets,
    resourcePackPath: 'minecraft/textures/gui/widgets.png',
    ...{"cssVar":"--widgets-gui-atlas"}
  },

  'other_textures_latest_gui_bars': {
    content: other_textures_latest_gui_bars,
    resourcePackPath: 'minecraft/textures/gui/bars.png',
    ...{"cssVar":"--bars-gui-atlas"}
  },

  'latest_gui_container_inventory': {
    content: latest_gui_container_inventory,
    resourcePackPath: 'minecraft/textures/gui/container/inventory.png',
    ...{}
  },

  'latest_gui_container_shulker_box': {
    content: latest_gui_container_shulker_box,
    resourcePackPath: 'minecraft/textures/gui/container/shulker_box.png',
    ...{}
  },

  'latest_gui_container_generic_54': {
    content: latest_gui_container_generic_54,
    resourcePackPath: 'minecraft/textures/gui/container/generic_54.png',
    ...{}
  },

  'latest_gui_container_furnace': {
    content: latest_gui_container_furnace,
    resourcePackPath: 'minecraft/textures/gui/container/furnace.png',
    ...{}
  },

  'latest_gui_container_crafting_table': {
    content: latest_gui_container_crafting_table,
    resourcePackPath: 'minecraft/textures/gui/container/crafting_table.png',
    ...{}
  },

  'latest_gui_container_dispenser': {
    content: latest_gui_container_dispenser,
    resourcePackPath: 'minecraft/textures/gui/container/dispenser.png',
    ...{}
  },

  'latest_gui_container_hopper': {
    content: latest_gui_container_hopper,
    resourcePackPath: 'minecraft/textures/gui/container/hopper.png',
    ...{}
  },

  'latest_gui_container_horse': {
    content: latest_gui_container_horse,
    resourcePackPath: 'minecraft/textures/gui/container/horse.png',
    ...{}
  },

  'latest_gui_container_villager2': {
    content: latest_gui_container_villager2,
    resourcePackPath: 'minecraft/textures/gui/container/villager2.png',
    ...{}
  },

  'latest_gui_container_enchanting_table': {
    content: latest_gui_container_enchanting_table,
    resourcePackPath: 'minecraft/textures/gui/container/enchanting_table.png',
    ...{}
  },

  'latest_gui_container_anvil': {
    content: latest_gui_container_anvil,
    resourcePackPath: 'minecraft/textures/gui/container/anvil.png',
    ...{}
  },

  'latest_gui_container_beacon': {
    content: latest_gui_container_beacon,
    resourcePackPath: 'minecraft/textures/gui/container/beacon.png',
    ...{}
  },
}
type Keys = 'latest_gui_title_minecraft' | 'other_textures_1_19_gui_icons' | 'other_textures_latest_gui_widgets' | 'other_textures_latest_gui_bars' | 'latest_gui_container_inventory' | 'latest_gui_container_shulker_box' | 'latest_gui_container_generic_54' | 'latest_gui_container_furnace' | 'latest_gui_container_crafting_table' | 'latest_gui_container_dispenser' | 'latest_gui_container_hopper' | 'latest_gui_container_horse' | 'latest_gui_container_villager2' | 'latest_gui_container_enchanting_table' | 'latest_gui_container_anvil' | 'latest_gui_container_beacon'
export const resourcesContentOriginal = {

  'latest_gui_title_minecraft': latest_gui_title_minecraft,

  'other_textures_1_19_gui_icons': other_textures_1_19_gui_icons,

  'other_textures_latest_gui_widgets': other_textures_latest_gui_widgets,

  'other_textures_latest_gui_bars': other_textures_latest_gui_bars,

  'latest_gui_container_inventory': latest_gui_container_inventory,

  'latest_gui_container_shulker_box': latest_gui_container_shulker_box,

  'latest_gui_container_generic_54': latest_gui_container_generic_54,

  'latest_gui_container_furnace': latest_gui_container_furnace,

  'latest_gui_container_crafting_table': latest_gui_container_crafting_table,

  'latest_gui_container_dispenser': latest_gui_container_dispenser,

  'latest_gui_container_hopper': latest_gui_container_hopper,

  'latest_gui_container_horse': latest_gui_container_horse,

  'latest_gui_container_villager2': latest_gui_container_villager2,

  'latest_gui_container_enchanting_table': latest_gui_container_enchanting_table,

  'latest_gui_container_anvil': latest_gui_container_anvil,

  'latest_gui_container_beacon': latest_gui_container_beacon,
}
