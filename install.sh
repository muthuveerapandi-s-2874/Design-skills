#!/bin/bash

echo "🚀 Installing My Tool..."

# Create folder
INSTALL_DIR="$HOME/.my-tool"
mkdir -p "$INSTALL_DIR"

# Download main file
curl -L https://raw.githubusercontent.com/muthuveerapandi-s-2874/Design-skills/main/index.js -o "$INSTALL_DIR/index.js"

# Create command
echo '#!/bin/bash
node $HOME/.my-tool/index.js "$@"' > /usr/local/bin/mytool

chmod +x /usr/local/bin/mytool

echo "✅ Installed successfully!"
echo "👉 Run: mytool"