FROM rustlang/rust:nightly

RUN mkdir /app
WORKDIR /app

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y libssl-dev

# Install node
# RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - \
#     && apt-get install -y nodejs yarn

# Install linuxbrew
# RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
# RUN test -d ~/.linuxbrew && PATH="$HOME/.linuxbrew/bin:$HOME/.linuxbrew/sbin:$PATH"
# RUN test -d /home/linuxbrew/.linuxbrew && PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:$PATH"
# RUN test -r ~/.bash_profile && echo "export PATH='$(brew --prefix)/bin:$(brew --prefix)/sbin'":'"$PATH"' >>~/.bash_profile
# RUN echo "export PATH='$(brew --prefix)/bin:$(brew --prefix)/sbin'":'"$PATH"' >>~/.profile

# Install miniserve
# RUN brew install miniserve
# Install wasm-pack
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

RUN rustup update
RUN rustup target add wasm32-unknown-unknown
CMD ["/bin/bash"]

# RUN apt-get update -y && apt-get upgrade -y
# RUN apt-get install -y default-mysql-client
# RUN apt-get install -y npm
# RUN npm install -y npm@latest -g

# RUN cargo install diesel_cli --no-default-features --features mysql
# RUN cargo install wasm-pack
# RUN cargo install cargo-generate

# RUN rustup target add wasm32-unknown-unknown
# RUN rustup target add wasm32-unknown-emscripten

# RUN USER=root cargo new --bin app
# WORKDIR /app
# COPY ./Cargo.* ./
# RUN cargo build --color never 

# COPY . /app
# RUN cargo build

# CMD ["cargo", "run"]