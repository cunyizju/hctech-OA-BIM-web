<template>
  <fieldset>
    <Steps :current="1">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <legend>Isthisright</legend>
    <div class="content flex align-center justify-space-around buttons">
      <button class="button small">Normal</button>
      <button class="button small primary">Primary</button>
      <button class="button small success">
        <i class="icon fa fa-check"></i>Success
      </button>
      <button class="button small warning">Warning</button>
      <button class="button small danger">Danger</button>
      <button class="button small outline">Outline</button>
      <button class="button small loading">Loading</button>
    </div>
    <fieldset>
      <legend>Disabled buttons</legend>
      <div class="content flex align-center justify-space-around buttons">
        <button class="button" disabled="disabled">Normal</button>
        <button class="button primary" disabled="disabled">Primary</button>
        <button class="button success" disabled="disabled">
          <i class="icon fa fa-check"></i>Success
        </button>
        <button class="button warning" disabled="disabled">Warning</button>
        <button class="button danger" disabled="disabled">Danger</button>
        <button class="button outline" disabled="disabled">Outline</button>
      </div>
    </fieldset>
    <fieldset>
      <legend>Icon buttons</legend>
      <div class="content flex align-center justify-space-around buttons">
        <button class="button">
          <i class="fa fa-home"></i>
        </button>
        <button class="button primary">
          <i class="fa fa-tasks"></i>
        </button>
        <button class="button success">
          <i class="fa fa-cogs"></i>
        </button>
        <button class="button warning">
          <i class="fa fa-comments"></i>
        </button>
        <button class="button danger">
          <i class="fa fa-trash"></i>
        </button>
        <button class="button outline">
          <i class="fa fa-pencil"></i>
        </button>
      </div>
    </fieldset>
  </fieldset>
</template>

<script>
export default {
  methods: {
    getTypographyInfo(elType) {
      if (this.$el) {
        let element = this.$el.querySelector(elType);
        if (element) {
          let style = window.getComputedStyle(element, null);
          return (
            style.fontFamily.split(",")[0] +
            " " +
            style.fontWeight +
            ", " +
            style.fontSize
          );
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../../../scss/themes/blurred/variables";

.container {
  padding: 0 1rem;
}

section {
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  > h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding: 8px 10px;

    background-color: rgba(darken($backgroundColor, 10%), 0.6);
    border: 1px solid darken($backgroundColor, 8%);
    border-radius: 8px;

    .number {
      color: #888;
    }

    .text {
      margin-left: 4px;
      font-weight: $fontLight;
      text-transform: uppercase;
    }

    clear: both;
  } // .title
} //. section

.buttons {
  margin-bottom: 20px;
}

.list {
  > * {
    margin-bottom: 20px;
  }
}

.panels {
  align-items: flex-start;
  .panel,
  .card {
    margin: 20px;
  }

  .card {
    max-width: 350px;
  }
}

.colors {
  $boxSize: 150px;

  .box {
    width: $boxSize;
    height: $boxSize + 20px;

    border: 1px solid darken($backgroundColor, 10%);
    border-radius: 6px;

    margin: 5px 20px;
    padding: 2px;

    .caption {
      float: left;
      width: 100%;
      text-align: center;
    }

    .main {
      float: left;
      width: 100%;
      height: $boxSize - 60px;
    } // .main

    .light {
      float: left;
      width: 50%;
      height: 30px;
    } // .light

    .dark {
      float: right;
      width: 50%;
      height: 30px;
    } // .dark

    .code {
      float: left;
      width: 100%;
      position: relative;
      margin-top: 5px;

      &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        text-align: center;
        font-family: "Consolas";
        color: White;
      }
    } // .code

    $colors: $color1, $color2, $color3, $color4, $color5;

    $colors-light: $color1-light, $color2-light, $color3-light, $color4-light,
      $color5-light;
    $colors-dark: $color1-dark, $color2-dark, $color3-dark, $color4-dark,
      $color5-dark;

    @for $i from 1 through 5 {
      $c: nth($colors, $i);

      &.box#{$i} {
        .main {
          background-color: $c;
        }
        .light {
          background-color: nth($colors-light, $i);
        }
        .dark {
          background-color: nth($colors-dark, $i);
        }
        .code:after {
          content: "" + $c;
        }
      } // box
    } // for
  } // .box
} // .colors
</style>