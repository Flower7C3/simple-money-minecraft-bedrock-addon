// Minecraft Formatting Codes - Complete Implementation
// Based on: https://minecraft.fandom.com/wiki/Formatting_codes

// Java Edition colors (0-f) - Foreground colors
var javaColors = {
    '0': '#000000', // black
    '1': '#0000AA', // dark_blue
    '2': '#00AA00', // dark_green
    '3': '#00AAAA', // dark_aqua
    '4': '#AA0000', // dark_red
    '5': '#AA00AA', // dark_purple
    '6': '#FFAA00', // gold
    '7': '#AAAAAA', // gray
    '8': '#555555', // dark_gray
    '9': '#5555FF', // blue
    'a': '#55FF55', // green
    'b': '#55FFFF', // aqua
    'c': '#FF5555', // red
    'd': '#FF55FF', // light_purple
    'e': '#FFFF55', // yellow
    'f': '#FFFFFF'  // white
};

// Bedrock Edition additional colors (g-u) - Material colors
var bedrockColors = {
    'g': '#DDD605', // minecoin_gold
    'h': '#E3D4D1', // material_quartz
    'i': '#CECACA', // material_iron
    'j': '#443A3B', // material_netherite
    'm': '#971607', // material_redstone
    'n': '#B4684D', // material_copper
    'p': '#DEB12D', // material_gold
    'q': '#47A036', // material_emerald
    's': '#2CBAA8', // material_diamond
    't': '#21497B', // material_lapis
    'u': '#9A5CC6'  // material_amethyst
};

// Bedrock Edition emojis and symbols (using images from Bedrock Wiki)
var bedrockEmojis = {
    // Xbox Controller - using correct shortcodes from Bedrock Wiki
    'xbox_face_button_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/a_button.png' },
    'xbox_face_button_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/b_button.png' },
    'xbox_face_button_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/x_button.png' },
    'xbox_face_button_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/y_button.png' },
    'xbox_bumper_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/left_bumper.png' },
    'xbox_bumper_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/right_bumper.png' },
    'xbox_trigger_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/left_trigger.png' },
    'xbox_trigger_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/right_trigger.png' },
    'xbox_select': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/select.png' },
    'xbox_start': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/start.png' },
    'xbox_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/left_stick.png' },
    'xbox_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/right_stick.png' },
    'xbox_dpad_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/dpad_up.png' },
    'xbox_dpad_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/dpad_left.png' },
    'xbox_dpad_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/dpad_down.png' },
    'xbox_dpad_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/xbox/dpad_right.png' },
    
    // Oculus VR Controller
    'oculus_0_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/0_button.png' },
    'oculus_a_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/a_button.png' },
    'oculus_b_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/b_button.png' },
    'oculus_x_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/x_button.png' },
    'oculus_y_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/y_button.png' },
    'oculus_left_grip': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/left_grip.png' },
    'oculus_right_grip': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/right_grip.png' },
    'oculus_left_trigger': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/left_trigger.png' },
    'oculus_right_trigger': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/right_trigger.png' },
    'oculus_left_stick': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/left_stick.png' },
    'oculus_right_stick': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/oculus/right_stick.png' },
    
    // Windows MR Controller
    'windows_mr_menu': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/menu.png' },
    'windows_mr_windows': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/windows.png' },
    'windows_mr_left_touchpad': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/left_touchpad.png' },
    'windows_mr_left_touchpad_horizontal': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/left_touchpad_horizontal.png' },
    'windows_mr_left_touchpad_vertical': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/left_touchpad_vertical.png' },
    'windows_mr_right_touchpad': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/right_touchpad.png' },
    'windows_mr_right_touchpad_horizontal': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/right_touchpad_horizontal.png' },
    'windows_mr_right_touchpad_vertical': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/right_touchpad_vertical.png' },
    'windows_mr_left_trigger': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/left_trigger.png' },
    'windows_mr_right_trigger': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/right_trigger.png' },
    'windows_mr_left_grab': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/left_grab.png' },
    'windows_mr_right_grab': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/right_grab.png' },
    'windows_mr_left_stick': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/left_stick.png' },
    'windows_mr_right_stick': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/windowsMR/right_stick.png' },
    
    // Blocks & Items
    'wood_pickaxe': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/items/wooden_pickaxe.png' },
    'wood_sword': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/items/wooden_sword.png' },
    'crafting_table': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/items/crafting_table.png' },
    'furnace': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/items/furnace.png' },
    
    // HUD
    'armor': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/hud/armor.png' },
    'tip_crosshair': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/hud/crosshair.png' },
    'shank': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/hud/shank.png' },
    'heart': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/hud/heart.png' },
    
    // Marketplace
    'minecoin': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/marketplace/minecoin.png' },
    'token': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/marketplace/token.png' },
    
    // Mouse & Controller
    // Mouse - CORRECT names from Bedrock Wiki
    'mouse_left_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/left_button.png' },
    'mouse_right_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/right_button.png' },
    'mouse_middle_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/middle_button.png' },
    'mouse_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/button.png' },
    'light_mouse_left_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/light_left_button.png' },
    'light_mouse_right_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/light_right_button.png' },
    'light_mouse_middle_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/light_middle_button.png' },
    'light_mouse_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/mouse/light_button.png' },
    
    // Touch - ALL from Bedrock Wiki
    'touch_forward': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/forward.png' },
    'touch_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/left.png' },
    'touch_back': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/back.png' },
    'touch_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/right.png' },
    'touch_jump': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/jump.png' },
    'touch_sneak': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/sneak.png' },
    'touch_chat': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/chat.png' },
    'touch_sprint_double_tap': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/sprint_double_tap.png' },
    'tip_virtual_button_jump': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/jump.png' },
    'tip_virtual_button_action_attack_or_destroy': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/attack.png' },
    'tip_virtual_joystick': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/joystick.png' },
    'touch_virtual_joystick_forward': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/joystick_forward.png' },
    'touch_virtual_joystick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/joystick_left.png' },
    'touch_virtual_joystick_back': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/joystick_back.png' },
    'touch_virtual_joystick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/joystick_right.png' },
    'tip_virtual_button_action_build_or_use': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/place.png' },
    'tip_virtual_button_sneak': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/sneak.png' },
    'tip_virtual_button_sprint': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/sprint.png' },
    'touch_sprint': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/sprint.png' },
    'tip_virtual_button_fly_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/fly_up.png' },
    'tip_virtual_button_fly_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/fly_down.png' },
    'tip_virtual_button_dismount': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/dismount.png' },
    'touch_fly_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/fly_up_old.png' },
    'touch_fly_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/fly_down_old.png' },
    'touch_stop_flying': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/stop_flying.png' },
    'tip_touch_sneak': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smallcrouch.png' },
    'tip_touch_jump': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smalljump.png' },
    'tip_touch_inventory': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smallinventory.png' },
    'tip_touch_fly_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smallflyup.png' },
    'tip_touch_fly_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smallflydown.png' },
    'tip_touch_forward': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smalluparrow.png' },
    'tip_touch_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smallleftarrow.png' },
    'tip_touch_back': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smalldownarrow.png' },
    'tip_touch_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/touch/smallrightarrow.png' },
    
    // Recipe Book
    'craftable_toggle_on': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/recipe-book/craftable_toggle_on.png' },
    'craftable_toggle_off': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/recipe-book/craftable_toggle_off.png' },
    
    // Nintendo Switch - CORRECT names from Bedrock Wiki
    'switch_face_button_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/a_button.png' },
    'switch_face_button_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/b_button.png' },
    'switch_face_button_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/x_button.png' },
    'switch_face_button_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/y_button.png' },
    'switch_start': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/minus.png' },
    'switch_select': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/plus.png' },
    'switch_bumper_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/left_bumper.png' },
    'switch_bumper_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/right_bumper.png' },
    'switch_trigger_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/left_trigger.png' },
    'switch_trigger_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/right_trigger.png' },
    'switch_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/left_stick.png' },
    'switch_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/right_stick.png' },
    'switch_dpad_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/dpad_up.png' },
    'switch_dpad_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/dpad_right.png' },
    'switch_dpad_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/dpad_down.png' },
    'switch_dpad_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/switch/dpad_left.png' },
    
    // PlayStation - CORRECT names from Bedrock Wiki
    'ps4_face_button_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/cross.png' },
    'ps4_face_button_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/circle.png' },
    'ps4_face_button_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/square.png' },
    'ps4_face_button_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/triangle.png' },
    'ps4_bumper_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/left_bumper.png' },
    'ps4_bumper_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/right_bumper.png' },
    'ps4_trigger_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/left_trigger.png' },
    'ps4_trigger_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/right_trigger.png' },
    'ps4_select': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/touch_pad.png' },
    'ps4_start': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/options_share.png' },
    'ps4_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/left_stick.png' },
    'ps4_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/right_stick.png' },
    'ps4_dpad_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/dpad_up.png' },
    'ps4_dpad_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/dpad_left.png' },
    'ps4_dpad_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/dpad_down.png' },
    'ps4_dpad_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/playstation/dpad_right.png' },
    
    // Controller - Stick directions
    'ps4_left_stick_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_up.png' },
    'ps4_left_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_left.png' },
    'ps4_left_stick_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_down.png' },
    'ps4_left_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_right.png' },
    'ps4_right_stick_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_up.png' },
    'ps4_right_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_left.png' },
    'ps4_right_stick_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_down.png' },
    'ps4_right_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_right.png' },
    'switch_left_stick_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_up.png' },
    'switch_left_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_left.png' },
    'switch_left_stick_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_down.png' },
    'switch_left_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_right.png' },
    'switch_right_stick_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_up.png' },
    'switch_right_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_left.png' },
    'switch_right_stick_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_down.png' },
    'switch_right_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_right.png' },
    'xbox_left_stick_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_up.png' },
    'xbox_left_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_left.png' },
    'xbox_left_stick_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_down.png' },
    'xbox_left_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/left_stick_right.png' },
    'xbox_right_stick_up': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_up.png' },
    'xbox_right_stick_left': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_left.png' },
    'xbox_right_stick_down': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_down.png' },
    'xbox_right_stick_right': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/controller/right_stick_right.png' },
    
    // Other symbols - CORRECT names from Bedrock Wiki
    'nbsp': { char: '', image: null },
    'code_builder_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/other/agent.png' },
    'immersive_reader_button': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/other/immersive_reader.png' },
    'hollow_star': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/other/hollow_star.png' },
    'solid_star': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/other/solid_star.png' },
    'camera': { char: '', image: 'https://wiki.bedrock.dev/assets/images/text/emojis/other/camera.png' }
};

// Edition selection
var currentEdition = 'bedrock'; // 'java' or 'bedrock'
var color = javaColors; // Start with Java colors
  
  var input = $('#input');
  var output = $('#output');
  
input.on('input keyup paste', function() {
    render($(this).val());
  });
  
  function render(string) {
    output.html(replacers(string));
  }
  
  function replacers(string) {
    // Process formatting codes based on current edition
    var replaced = string;
    
    // First, convert actual newlines to placeholder
    replaced = replaced.replace(/\n/g, '___NEWLINE___');
    
    if (currentEdition === 'java') {
        // Java Edition: colors first, then formatting
        replaced = replaced
            .replace(/§([0-9a-f])/gi, setJavaColor)
            .replace(/§k/gi, setMagic)           // Obfuscated
            .replace(/§l/gi, '<strong>')         // Bold
            .replace(/§m/gi, '<s>')              // Strikethrough
            .replace(/§n/gi, '<u>')              // Underline
            .replace(/§o/gi, '<em>')             // Italic
            .replace(/§r/gi, resetFormat)        // Reset
            .replace(/\\n/gi, '<br />');         // Escaped newlines
    } else {
        // Bedrock Edition: colors first, then formatting (limited) + emojis
        replaced = replaced
            .replace(/§([0-9a-f])/gi, setJavaColor)
            .replace(/§([g-u])/gi, setBedrockColor)
            .replace(/§k/gi, setMagic)           // Obfuscated
            .replace(/§l/gi, '<strong>')         // Bold
            .replace(/§o/gi, '<em>')             // Italic
            .replace(/§r/gi, resetFormat)        // Reset
            .replace(/\\n/gi, '<br />')          // Escaped newlines
            .replace(/:([a-zA-Z0-9_]+):/g, replaceEmoji);   // Emoji replacement
    }
    
    // Convert placeholder back to actual newlines
    replaced = replaced.replace(/___NEWLINE___/g, '<br />');
    
    return replaced;
  }
  
function setJavaColor(match) {
    var code = match.substr(1, match.length).toLowerCase();
    var value = javaColors[code];
    if (!value) {
        console.warn('Unknown Java color code: §' + code);
        return match; // Return original if color not found
    }
    return '<span style="color:' + value + '">';
}

function setBedrockColor(match) {
    var code = match.substr(1, match.length).toLowerCase();
    var value = bedrockColors[code];
    if (!value) {
        console.warn('Unknown Bedrock color code: §' + code);
        return match; // Return original if color not found
    }
    return '<span style="color:' + value + '">';
  }
  
  function setMagic(match) {
    return '<span class="magic">';
}

function replaceEmoji(match, emojiName) {
    var emoji = bedrockEmojis[emojiName.toLowerCase()];
    if (emoji) {
        if (emoji.image) {
            return '<img src="' + emoji.image + '" class="bedrock-emoji" title="' + emojiName + '" alt="' + emojiName + '">';
        } else {
            return '<span class="bedrock-emoji" title="' + emojiName + '">' + emoji.char + '</span>';
        }
    }
    return match; // Return original if emoji not found
  }
  
  function getMagic() {
    return Math.random().toString(16).substr(1, 2).split('.').join("");
  }
  
  function runMagic() {
    $('.magic').each(function() {
        $(this).text(getMagic());
    });
    window.setTimeout(runMagic, 100);
}

// Start magic animation
  runMagic();

// Generate color codes automatically
function generateColorCodes() {
    var container = $('#color-codes-list');
    container.empty();
    
    if (currentEdition === 'java') {
        // Java Edition - show colors and formats
        container.append('<div class="item" style="font-weight: bold; color: #4CAF50; margin-bottom: 10px;">Java Colors (0-f):</div>');
        Object.keys(javaColors).forEach(function(code) {
            var colorName = getColorName(code);
            container.append('<div class="item">§' + code + ' <span style="color: ' + javaColors[code] + ';">' + colorName + '</span></div>');
        });
        
        // Add format codes
        container.append('<div class="item" style="font-weight: bold; color: #FFD700; margin: 15px 0 10px 0;">Format Codes:</div>');
        var formatCodes = [
            { code: 'k', name: 'obfuscated', desc: 'Random characters' },
            { code: 'l', name: 'bold', desc: 'Bold text' },
            { code: 'm', name: 'strikethrough', desc: 'Strikethrough' },
            { code: 'n', name: 'underline', desc: 'Underlined text' },
            { code: 'o', name: 'italic', desc: 'Italic text' },
            { code: 'r', name: 'reset', desc: 'Reset all formatting' }
        ];
        formatCodes.forEach(function(format) {
            container.append('<div class="item">§' + format.code + ' <span style="font-weight: bold;">' + format.name + '</span> - ' + format.desc + '</div>');
        });
        
        container.append('<div class="item" style="color: #666; font-style: italic; margin-top: 15px;">Emojis are only available in Bedrock Edition</div>');
        
    } else {
        // Bedrock Edition - show all content in one list with CSS columns
        
        // All colors (0-f + g-u)
        container.append('<div class="item" style="font-weight: bold; color: #4CAF50; margin-bottom: 10px;">Colors (0-f + g-u):</div>');
        
        // Basic colors (0-f)
        Object.keys(javaColors).forEach(function(code) {
            var colorName = getColorName(code);
            container.append('<div class="item">§' + code + ' <span style="color: ' + javaColors[code] + ';">' + colorName + '</span></div>');
        });
        
        // Material colors (g-u)
        Object.keys(bedrockColors).forEach(function(code) {
            var colorName = getColorName(code);
            container.append('<div class="item">§' + code + ' <span style="color: ' + bedrockColors[code] + ';">' + colorName + '</span></div>');
        });
        
        // Format codes
        container.append('<div class="item" style="font-weight: bold; color: #FFD700; margin: 15px 0 10px 0;">Format Codes:</div>');
        var formatCodes = [
            { code: 'k', name: 'obfuscated', desc: 'Random characters' },
            { code: 'l', name: 'bold', desc: 'Bold text' },
            { code: 'm', name: 'strikethrough', desc: 'Strikethrough' },
            { code: 'n', name: 'underline', desc: 'Underlined text' },
            { code: 'o', name: 'italic', desc: 'Italic text' },
            { code: 'r', name: 'reset', desc: 'Reset all formatting' }
        ];
        formatCodes.forEach(function(format) {
            container.append('<div class="item">§' + format.code + ' <span style="font-weight: bold;">' + format.name + '</span></div>');
        });
        
        // All emojis - in order from Bedrock Wiki
        addEmojiCategory(container, 'Xbox', '#4CAF50', ['xbox_face_button_down', 'xbox_face_button_right', 'xbox_face_button_left', 'xbox_face_button_up', 'xbox_bumper_left', 'xbox_bumper_right', 'xbox_trigger_left', 'xbox_trigger_right', 'xbox_select', 'xbox_start', 'xbox_stick_left', 'xbox_stick_right', 'xbox_dpad_up', 'xbox_dpad_left', 'xbox_dpad_down', 'xbox_dpad_right']);
        addEmojiCategory(container, 'Oculus VR', '#2196F3', ['oculus_0_button', 'oculus_a_button', 'oculus_b_button', 'oculus_x_button', 'oculus_y_button', 'oculus_left_grip', 'oculus_right_grip', 'oculus_left_trigger', 'oculus_right_trigger', 'oculus_left_stick', 'oculus_right_stick']);
        addEmojiCategory(container, 'Windows MR', '#FF9800', ['windows_mr_menu', 'windows_mr_windows', 'windows_mr_left_touchpad', 'windows_mr_left_touchpad_horizontal', 'windows_mr_left_touchpad_vertical', 'windows_mr_right_touchpad', 'windows_mr_right_touchpad_horizontal', 'windows_mr_right_touchpad_vertical', 'windows_mr_left_trigger', 'windows_mr_right_trigger', 'windows_mr_left_grab', 'windows_mr_right_grab', 'windows_mr_left_stick', 'windows_mr_right_stick']);
        addEmojiCategory(container, 'Mouse', '#E91E63', ['mouse_left_button', 'mouse_right_button', 'mouse_middle_button', 'mouse_button', 'light_mouse_left_button', 'light_mouse_right_button', 'light_mouse_middle_button', 'light_mouse_button']);
        addEmojiCategory(container, 'Touch', '#FF9800', ['touch_forward', 'touch_left', 'touch_back', 'touch_right', 'touch_jump', 'touch_sneak', 'touch_chat', 'touch_sprint_double_tap', 'tip_virtual_button_jump', 'tip_virtual_button_action_attack_or_destroy', 'tip_virtual_joystick', 'touch_virtual_joystick_forward', 'touch_virtual_joystick_left', 'touch_virtual_joystick_back', 'touch_virtual_joystick_right', 'tip_virtual_button_action_build_or_use', 'tip_virtual_button_sneak', 'tip_virtual_button_sprint', 'touch_sprint', 'tip_virtual_button_fly_up', 'tip_virtual_button_fly_down', 'tip_virtual_button_dismount', 'touch_fly_up', 'touch_fly_down', 'touch_stop_flying', 'tip_touch_sneak', 'tip_touch_jump', 'tip_touch_inventory', 'tip_touch_fly_up', 'tip_touch_fly_down', 'tip_touch_forward', 'tip_touch_left', 'tip_touch_back', 'tip_touch_right']);
        addEmojiCategory(container, 'Recipe Book', '#9C27B0', ['craftable_toggle_on', 'craftable_toggle_off']);
        addEmojiCategory(container, 'Nintendo Switch', '#FF5722', ['switch_face_button_down', 'switch_face_button_right', 'switch_face_button_left', 'switch_face_button_up', 'switch_bumper_left', 'switch_bumper_right', 'switch_trigger_left', 'switch_trigger_right', 'switch_select', 'switch_start', 'switch_stick_left', 'switch_stick_right', 'switch_dpad_up', 'switch_dpad_left', 'switch_dpad_down', 'switch_dpad_right']);
        addEmojiCategory(container, 'PlayStation', '#3F51B5', ['ps4_face_button_down', 'ps4_face_button_right', 'ps4_face_button_left', 'ps4_face_button_up', 'ps4_bumper_left', 'ps4_bumper_right', 'ps4_trigger_left', 'ps4_trigger_right', 'ps4_select', 'ps4_start', 'ps4_stick_left', 'ps4_stick_right', 'ps4_dpad_up', 'ps4_dpad_left', 'ps4_dpad_down', 'ps4_dpad_right']);
        addEmojiCategory(container, 'Controller', '#607D8B', ['ps4_left_stick_up', 'ps4_left_stick_left', 'ps4_left_stick_down', 'ps4_left_stick_right', 'ps4_right_stick_up', 'ps4_right_stick_left', 'ps4_right_stick_down', 'ps4_right_stick_right', 'switch_left_stick_up', 'switch_left_stick_left', 'switch_left_stick_down', 'switch_left_stick_right', 'switch_right_stick_up', 'switch_right_stick_left', 'switch_right_stick_down', 'switch_right_stick_right', 'xbox_left_stick_up', 'xbox_left_stick_left', 'xbox_left_stick_down', 'xbox_left_stick_right', 'xbox_right_stick_up', 'xbox_right_stick_left', 'xbox_right_stick_down', 'xbox_right_stick_right']);
        addEmojiCategory(container, 'Blocks & Items', '#8BC34A', ['wood_pickaxe', 'wood_sword', 'crafting_table', 'furnace']);
        addEmojiCategory(container, 'HUD', '#F44336', ['armor', 'tip_crosshair', 'shank', 'heart']);
        addEmojiCategory(container, 'Marketplace', '#FFC107', ['minecoin', 'token']);
        addEmojiCategory(container, 'Other', '#9C27B0', ['code_builder_button', 'immersive_reader_button', 'hollow_star', 'solid_star', 'camera', 'nbsp']);
    }
}

// Helper function to add emoji category
function addEmojiCategory(container, title, color, emojiNames) {
    container.append('<div class="item" style="font-weight: bold; color: ' + color + '; margin-top: 10px;">' + title + ':</div>');
    emojiNames.forEach(function(emojiName) {
        var emoji = bedrockEmojis[emojiName];
        if (emoji.image) {
            container.append('<div class="item">:' + emojiName + ': <img src="' + emoji.image + '" class="bedrock-emoji" title="' + emojiName + '"></div>');
        } else {
            container.append('<div class="item">:' + emojiName + ': <span class="bedrock-emoji">' + emoji.char + '</span></div>');
        }
    });
}

// Helper function to get color name from code
function getColorName(code) {
    var colorNames = {
        '0': 'black', '1': 'dark_blue', '2': 'dark_green', '3': 'dark_aqua', '4': 'dark_red', '5': 'dark_purple',
        '6': 'gold', '7': 'gray', '8': 'dark_gray', '9': 'blue', 'a': 'green', 'b': 'aqua',
        'c': 'red', 'd': 'light_purple', 'e': 'yellow', 'f': 'white', 'g': 'minecoin_gold',
        'h': 'material_quartz', 'i': 'material_iron', 'j': 'material_netherite', 'm': 'material_redstone',
        'n': 'material_copper', 'p': 'material_gold', 'q': 'material_emerald', 's': 'material_diamond',
        't': 'material_lapis', 'u': 'material_amethyst'
    };
    return colorNames[code] || 'unknown';
}

// Generate format codes automatically
function generateFormatCodes() {
    // This function is now integrated into generateColorCodes()
    // Keeping it for compatibility but it does nothing
}

// Switch edition function
function switchEdition(edition) {
    currentEdition = edition;
    color = (edition === 'java') ? javaColors : Object.assign({}, javaColors, bedrockColors);
    
    // Regenerate codes
    generateColorCodes();
    generateFormatCodes();
    
    // Re-render current input
    render(input.val());
    
    // Update UI
    updateEditionUI();
}

// Update edition UI
function updateEditionUI() {
    $('#edition-java').removeClass('active');
    $('#edition-bedrock').removeClass('active');
    $('#edition-' + currentEdition).addClass('active');
    
    // Update current edition text
    var editionText = (currentEdition === 'java') ? 'Java Edition' : 'Bedrock Edition';
    $('#current-edition').text(editionText);
}

// Add example buttons
function addExampleButtons() {
    var examples = [
        {
            name: '📝 Multi-line Chat',
            text: '§c[Server] §fWelcome to the server!\n§a[Player] §fThanks!\n§e[Admin] §fHave fun!'
        },
        {
            name: '📖 Book Text',
            text: '§l§6Chapter 1: The Beginning\n\n§r§7This is a story about...\n\n§o§8- The Author'
        },
        {
            name: '🏷️ Sign Text',
            text: '§l§cWELCOME\n§a§lTO\n§b§lOUR\n§e§lSHOP'
        },
        {
            name: '🎮 Xbox (Bedrock)',
            text: '§fPress :xbox_face_button_down: to jump!\n§fUse :xbox_stick_left: to move\n§f:xbox_trigger_right: to attack'
        },
        {
            name: '🥽 VR (Bedrock)',
            text: '§fVR Controls:\n§f:oculus_a_button: Select\n§f:oculus_left_grip: Grab\n§f:oculus_right_trigger: Shoot'
        },
        {
            name: '🖥️ Windows MR (Bedrock)',
            text: '§fMR Controls:\n§f:windows_mr_menu: Menu\n§f:windows_mr_left_grab: Grab Left\n§f:windows_mr_right_touchpad: Navigate'
        },
        {
            name: '🛠️ Items (Bedrock)',
            text: '§fCrafting Guide:\n§f:wood_pickaxe: Mine stone\n§f:wood_sword: Fight mobs\n§f:crafting_table: Craft items\n§f:furnace: Smelt ores'
        },
        {
            name: '💖 HUD (Bedrock)',
            text: '§fGame Status:\n§f:heart: Health\n§f:armor: Armor\n§f:shank: Food\n§f:tip_crosshair: Aim'
        },
        {
            name: '💰 Marketplace (Bedrock)',
            text: '§fShop:\n§f:minecoin: Buy items\n§f:token: Special currency\n§f§6Welcome to our store!'
        },
        {
            name: '🖱️ Mouse (Bedrock)',
            text: '§fMouse Controls:\n§f:mouse_left_button: Left click\n§f:mouse_right_button: Right click\n§f:mouse_middle_button: Middle click\n§f:light_mouse_left_button: Light left click'
        },
        {
            name: '📱 Touch (Bedrock)',
            text: '§fTouch Controls:\n§f:touch_forward: Forward\n§f:touch_left: Left\n§f:touch_back: Back\n§f:touch_right: Right\n§f:touch_jump: Jump\n§f:touch_sneak: Sneak'
        },
        {
            name: '🎮 Nintendo Switch (Bedrock)',
            text: '§fSwitch Controls:\n§f:switch_face_button_down: Jump\n§f:switch_face_button_right: Cancel\n§f:switch_face_button_left: Attack\n§f:switch_face_button_up: Use item\n§f:switch_start: Menu\n§f:switch_select: Map\n§f:switch_bumper_left: Left bumper\n§f:switch_bumper_right: Right bumper'
        },
        {
            name: '🎮 PlayStation (Bedrock)',
            text: '§fPS Controls:\n§f:ps4_face_button_down: Confirm\n§f:ps4_face_button_right: Cancel\n§f:ps4_face_button_left: Attack\n§f:ps4_face_button_up: Use item\n§f:ps4_start: Options\n§f:ps4_select: Touchpad\n§f:ps4_bumper_left: Left bumper\n§f:ps4_bumper_right: Right bumper'
        }
    ];
    
    var buttonContainer = $('<div style="margin-top: 10px;"><p class="ui small header">Examples:</p><div class="ui small buttons" style="display: flex; flex-wrap: wrap; gap: 5px;"></div></div>');
    
    examples.forEach(function(example, index) {
        var button = $('<button class="ui small button" onclick="loadExample(' + index + ')" style="margin: 2px; flex: 0 0 auto;">' + example.name + '</button>');
        buttonContainer.find('.ui.buttons').append(button);
    });
    
    $('#entry .six.wide.column').append(buttonContainer);
    
    // Store examples globally
    window.examples = examples;
}

// Load example function
function loadExample(index) {
    if (window.examples && window.examples[index]) {
        input.val(window.examples[index].text);
        render(input.val());
    }
}

// Generate all codes on page load
$(document).ready(function() {
    generateColorCodes();
    generateFormatCodes();
    updateEditionUI();
    addExampleButtons();
});
  
  function resetFormat(match) {
    return '</strong></s></u></em><span style="color:#FFFFFF">';
}


// Add CSS for magic effect
$(document).ready(function() {
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .magic {
                animation: magic 0.1s infinite;
            }
            @keyframes magic {
                0% { opacity: 1; }
                50% { opacity: 0.5; }
                100% { opacity: 1; }
            }
        `)
        .appendTo('head');
});