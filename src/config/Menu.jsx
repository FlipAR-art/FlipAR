import {
  Menu,
  MenuItem,
  MenuList,
} from '@mui/joy';

const ConfigMenu = () => {
  
  return (
    <>
      <Menu
        anchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={true}
        onClose={() => {}}
      >
        <MenuList>
          <MenuItem>Scenes</MenuItem>
          <MenuItem>Cameras</MenuItem>
          <MenuItem>Layers</MenuItem>
          <MenuItem>Lights</MenuItem>
          <MenuItem>Materials</MenuItem>
          <MenuItem>Objects</MenuItem>
        </MenuList>
      </Menu>
    </>
  ) 
};
export const menuTabs = [
    {
      'name': 'Scenes',
      'items': [
        {
          'name': 'Theatre',
          'url': '/scenes',
          'keybindings': ['⇧ ⌘ T']
        },
        {
          'name': 'File Viewer',
          'items': [
            {
              'name': 'Gltf',
              'url': '/gltf',
              'keybindings': ['⇧ ⌘ G']
            },
            {
              'name': 'Obj',
              'url': '/obj',
              'keybindings': ['⇧ ⌘ O']
            },
            {
              'name': 'Fbx',
              'url': '/fbx',
              'keybindings': ['⇧ ⌘ F']
            },
            {
              'name': 'JsxObject',
              'url': '/jsxobject',
              'keybindings': ['⇧ ⌘ J']
            }
          ]
        },
        {
          'name': 'New Scene',
          'url': '/new-scene',
          'keybindings': ['⇧ ⌘ N']
        },
        {
          'name': 'Open Scene',
          'url': '/open-scene',
          'keybindings': ['⇧ ⌘ O']
        },
        {
          'name': 'Save Scene',
          'url': '/save-scene',
          'keybindings': ['⇧ ⌘ S']
        },
        {
          'name': 'Export Scene',
          'url': '/export-scene',
          'keybindings': ['⇧ ⌘ E']
        },
        {
          'name': 'Import Scene',
          'url': '/import-scene',
          'keybindings': ['⇧ ⌘ I']
        }
      ]
    },
    {
      'name': 'Files',
      'items': [
        {
          'name': 'New File',
          'url': '/catalog',
          'keybindings': ['⇧ ⌘ O']
        },
        {
          'name': 'Open File',
          'url': '/open-file',
          'keybindings': ['⇧ ⌘ O']
        },
        {
          'name': 'Save File',
          'url': '/save-file',
          'keybindings': ['⇧ ⌘ S']
        },
        {
          'name': 'Export File',
          'url': '/export-file',
          'keybindings': ['⇧ ⌘ E']
        },
        {
          'name': 'Import File',
          'url': '/import-file',
          'keybindings': ['⇧ ⌘ I']
        },
        {
          'name': 'Delete File',
          'url': '/delete-file',
          'keybindings': ['⇧ ⌘ D']
        },
        {
          'name': 'Rename File',
          'url': '/rename-file',
          'keybindings': ['⇧ ⌘ R']
        }
      ]
    },
    {
      'name': 'Elements',
      'items': [
        {
          'name': 'New Element',
          'url': '/new-element',
          'keybindings': ['⇧ ⌘ E']
        },
        {
          'name': 'Catalog',
          'items': [
            {
              'name': 'AudioPlayer',
              'url': '/audio',
              'keybindings': ['⇧ ⌘ A']
            },
            {
              'name': 'Butterfly',
              'url': '/grass',
              'keybindings': ['⇧ ⌘ G']
            },
            {
              'name': 'Terrain',
              'url': '/terrain',
              'keybindings': ['⇧ ⌘ T']
            },
            {
              'name': 'Light',
              'url': '/light',
              'keybindings': ['⇧ ⌘ L']
            },
            {
              'name': 'Camera',
              'url': '/camera',
              'keybindings': ['⇧ ⌘ C']
            },
            {
              'name': 'Sound',
              'url': '/sound',
              'keybindings': ['⇧ ⌘ S']
            },
            {
              'name': 'Texture',
              'url': '/texture',
              'keybindings': ['⇧ ⌘ T']
            },
            {
              'name': 'Fire',
              'url': '/fire',
              'keybindings': ['⇧ ⌘ F']
            },
            {
              'name': 'Water',
              'url': '/water',
              'keybindings': ['⇧ ⌘ W']
            },
              {
              'name': 'Rain',
              'url': '/rain',
              'keybindings': ['⇧ ⌘ R']
            },
            {
              'name': 'Snow',
              'url': '/snow',
              'keybindings': ['⇧ ⌘ S']
            },
            {
              'name': 'Wind',
              'url': '/wind',
              'keybindings': ['⇧ ⌘ W']
            },
            {
              'name': 'Particle',
              'url': '/particle',
              'keybindings': ['⇧ ⌘ P']
            },
          
            {
              'name': 'Animation',
              'url': '/animation',
              'keybindings': ['⇧ ⌘ A']
            },
            {
              'name': 'Postprocessing',
              'url': '/postprocessing',
              'keybindings': ['⇧ ⌘ P']
            }
          
          ]
        }
      ]
    }

  ];
export default ConfigMenu;