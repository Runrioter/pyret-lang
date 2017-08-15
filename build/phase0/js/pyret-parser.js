define('pyret-base/js/pyret-parser', ['jglr/jglr'],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
function(E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "start": "START",
    "name": "PyretGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "derivable": {
      "program": [
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude": [
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt"
      ],
      "block": [
        "block_I0_star",
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude_I0_opt": [
        "ε",
        "prelude_I0",
        "provide-stmt"
      ],
      "prelude_I1_opt": [
        "ε",
        "prelude_I1",
        "provide-types-stmt"
      ],
      "prelude_I2_star": [
        "ε",
        "prelude_I2",
        "import-stmt"
      ],
      "prelude_I0": [
        "provide-stmt"
      ],
      "provide-stmt": [],
      "prelude_I1": [
        "provide-types-stmt"
      ],
      "provide-types-stmt": [],
      "prelude_I2": [
        "import-stmt"
      ],
      "import-stmt": [],
      "import-source": [
        "import-special",
        "import-name"
      ],
      "comma-names": [],
      "import-special": [],
      "import-name": [],
      "import-special_I3_star": [
        "ε",
        "import-special_I3"
      ],
      "import-special_I3": [],
      "stmt": [
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "record-ann": [],
      "comma-names_I1_star": [
        "ε",
        "comma-names_I1"
      ],
      "comma-names_I1": [],
      "block_I0_star": [
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "block_I0": [
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "type-expr": [],
      "newtype-expr": [],
      "let-expr": [],
      "fun-expr": [],
      "data-expr": [],
      "when-expr": [],
      "var-expr": [],
      "rec-expr": [],
      "assign-expr": [],
      "check-test": [
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "check-expr": [],
      "contract-stmt": [],
      "ty-params": [
        "ty-params_I0_opt",
        "ε",
        "ty-params_I0"
      ],
      "ann": [
        "name-ann",
        "record-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "toplevel-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "binop-expr": [
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binding": [
        "name-binding",
        "tuple-binding"
      ],
      "name-binding": [],
      "tuple-binding": [],
      "tuple-binding_I1_star": [
        "ε",
        "tuple-binding_I1"
      ],
      "tuple-binding_I3_opt": [
        "ε",
        "tuple-binding_I3"
      ],
      "tuple-binding_I5_opt": [
        "ε",
        "tuple-binding_I5"
      ],
      "tuple-binding_I1": [],
      "tuple-binding_I3": [],
      "tuple-binding_I5": [],
      "name-binding_I0_opt": [
        "ε",
        "name-binding_I0"
      ],
      "name-binding_I2_opt": [
        "ε",
        "name-binding_I2"
      ],
      "name-binding_I0": [],
      "name-binding_I2": [],
      "multi-let-expr": [],
      "let-binding": [
        "let-expr",
        "var-expr"
      ],
      "multi-let-expr_I2_star": [
        "ε",
        "multi-let-expr_I2"
      ],
      "multi-let-expr_I3": [],
      "multi-let-expr_I2": [],
      "letrec-expr": [],
      "letrec-expr_I2_star": [
        "ε",
        "letrec-expr_I2"
      ],
      "letrec-expr_I3": [],
      "letrec-expr_I2": [],
      "type-bind": [],
      "newtype-bind": [],
      "type-let-bind": [
        "type-bind",
        "newtype-bind"
      ],
      "type-let-expr": [],
      "type-let-expr_I2_star": [
        "ε",
        "type-let-expr_I2"
      ],
      "type-let-expr_I3": [],
      "type-let-expr_I2": [],
      "contract-stmt_I2": [
        "ann",
        "noparen-arrow-ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann": [],
      "fun-header": [
        "args"
      ],
      "fun-expr_I3": [],
      "doc-string": [
        "doc-string_I0_opt",
        "ε",
        "doc-string_I0"
      ],
      "where-clause": [
        "where-clause_I0_opt",
        "ε",
        "where-clause_I0"
      ],
      "args": [],
      "return-ann": [
        "return-ann_I0_opt",
        "ε",
        "return-ann_I0"
      ],
      "ty-params_I0_opt": [
        "ε",
        "ty-params_I0"
      ],
      "ty-params_I0": [],
      "ty-params_I0_I0": [],
      "ty-params_I0_I2": [],
      "args_I0": [],
      "args_I1_opt": [
        "ε",
        "args_I1",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1_I1_star": [
        "ε",
        "args_I1_I1"
      ],
      "args_I1_I1": [],
      "return-ann_I0_opt": [
        "ε",
        "return-ann_I0"
      ],
      "return-ann_I0": [],
      "doc-string_I0_opt": [
        "ε",
        "doc-string_I0"
      ],
      "doc-string_I0": [],
      "where-clause_I0_opt": [
        "ε",
        "where-clause_I0"
      ],
      "where-clause_I0": [],
      "check-expr_I0": [],
      "check-op": [],
      "check-test_A0_I2_opt": [
        "ε",
        "check-test_A0_I2"
      ],
      "check-test_A0_I2": [],
      "check-test_A0_I2_I1": [],
      "check-op-postfix": [],
      "data-expr_I4_opt": [
        "ε",
        "data-expr_I4",
        "first-data-variant",
        "variant-constructor"
      ],
      "data-expr_I5_star": [
        "ε",
        "data-expr_I5",
        "data-variant"
      ],
      "data-sharing": [
        "data-sharing_I0_opt",
        "ε",
        "data-sharing_I0"
      ],
      "data-expr_I4": [
        "first-data-variant",
        "variant-constructor"
      ],
      "first-data-variant": [
        "variant-constructor"
      ],
      "data-expr_I5": [
        "data-variant"
      ],
      "data-variant": [],
      "variant-constructor": [],
      "variant-members": [],
      "data-with": [
        "data-with_I0_opt",
        "ε",
        "data-with_I0"
      ],
      "variant-members_I1_opt": [
        "ε",
        "variant-members_I1",
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1": [
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-member": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1_I1_star": [
        "ε",
        "variant-members_I1_I1"
      ],
      "variant-members_I1_I1": [],
      "variant-member_I0_opt": [
        "ε",
        "variant-member_I0"
      ],
      "variant-member_I0": [],
      "data-with_I0_opt": [
        "ε",
        "data-with_I0"
      ],
      "data-with_I0": [],
      "fields": [
        "field"
      ],
      "data-sharing_I0_opt": [
        "ε",
        "data-sharing_I0"
      ],
      "data-sharing_I0": [],
      "when-expr_I2": [],
      "expr": [
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr_I1_star": [
        "ε",
        "binop-expr_I1"
      ],
      "binop-expr_I1": [],
      "binop": [],
      "paren-expr": [],
      "id-expr": [],
      "prim-expr": [
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "lambda-expr": [],
      "method-expr": [],
      "app-expr": [],
      "obj-expr": [],
      "tuple-expr": [],
      "tuple-get": [],
      "dot-expr": [],
      "template-expr": [],
      "bracket-expr": [],
      "get-bang-expr": [],
      "update-expr": [],
      "extend-expr": [],
      "if-expr": [],
      "if-pipe-expr": [],
      "cases-expr": [],
      "for-expr": [],
      "user-block-expr": [],
      "inst-expr": [],
      "construct-expr": [],
      "table-select": [],
      "table-extend": [],
      "table-filter": [],
      "table-order": [],
      "table-extract": [],
      "table-update": [],
      "table-expr": [],
      "load-table-expr": [],
      "reactor-expr": [],
      "bad-expr": [],
      "paren-expr_I0": [],
      "num-expr": [],
      "frac-expr": [],
      "rfrac-expr": [],
      "bool-expr": [],
      "string-expr": [],
      "lambda-expr_I2": [],
      "method-expr_I2": [],
      "app-args": [],
      "opt-comma-binops": [
        "opt-comma-binops_I0_opt",
        "ε",
        "opt-comma-binops_I0",
        "comma-binops",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0_opt": [
        "ε",
        "opt-comma-binops_I0",
        "comma-binops",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0": [
        "comma-binops",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "comma-binops": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "comma-binops_I1_star": [
        "ε",
        "comma-binops_I1"
      ],
      "comma-binops_I1": [],
      "trailing-opt-comma-binops": [
        "trailing-opt-comma-binops_I0",
        "ε",
        "comma-binops",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "trailing-opt-comma-binops_I0": [
        "ε",
        "comma-binops",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "trailing-opt-comma-binops_I0_A0_I1_opt": [
        "ε",
        "trailing-opt-comma-binops_I0_A0_I1"
      ],
      "trailing-opt-comma-binops_I0_A0_I1": [],
      "inst-expr_I3_star": [
        "ε",
        "inst-expr_I3"
      ],
      "inst-expr_I3": [],
      "tuple-fields": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "tuple-fields_I1_star": [
        "ε",
        "tuple-fields_I1"
      ],
      "tuple-fields_I2_opt": [
        "ε",
        "tuple-fields_I2"
      ],
      "tuple-fields_I1": [],
      "tuple-fields_I2": [],
      "obj-fields": [
        "obj-field"
      ],
      "obj-field": [],
      "obj-fields_I1_star": [
        "ε",
        "obj-fields_I1"
      ],
      "obj-fields_I2_opt": [
        "ε",
        "obj-fields_I2"
      ],
      "obj-fields_I1": [],
      "obj-fields_I2": [],
      "key": [],
      "obj-field_A1_I2_opt": [
        "ε",
        "obj-field_A1_I2"
      ],
      "obj-field_A1_I2": [],
      "obj-field_A2_I3": [],
      "field": [],
      "fields_I1_star": [
        "ε",
        "fields_I1"
      ],
      "fields_I2_opt": [
        "ε",
        "fields_I2"
      ],
      "fields_I1": [],
      "fields_I2": [],
      "field_A1_I3": [],
      "construct-modifier": [
        "ε"
      ],
      "table-headers": [
        "table-headers_I0_opt",
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-rows": [
        "table-rows_I0_opt",
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-headers_I0_opt": [
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-headers_I0": [
        "table-header"
      ],
      "table-headers_I0_I0_star": [
        "ε",
        "table-headers_I0_I0",
        "list-table-header"
      ],
      "table-header": [],
      "table-headers_I0_I0": [
        "list-table-header"
      ],
      "list-table-header": [],
      "table-header_I1_opt": [
        "ε",
        "table-header_I1"
      ],
      "table-header_I1": [],
      "table-rows_I0_opt": [
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-rows_I0": [
        "table-row"
      ],
      "table-rows_I0_I0_star": [
        "ε",
        "table-rows_I0_I0",
        "table-row"
      ],
      "table-row": [],
      "table-rows_I0_I0": [
        "table-row"
      ],
      "table-items": [
        "table-items_I0_opt",
        "ε",
        "table-items_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_opt": [
        "ε",
        "table-items_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_I0_star": [
        "ε",
        "table-items_I0_I0",
        "list-table-item"
      ],
      "table-items_I0_I0": [
        "list-table-item"
      ],
      "list-table-item": [],
      "if-expr_I2": [],
      "if-expr_I4_star": [
        "ε",
        "if-expr_I4",
        "else-if"
      ],
      "if-expr_I5_opt": [
        "ε",
        "if-expr_I5"
      ],
      "if-expr_I4": [
        "else-if"
      ],
      "else-if": [],
      "if-expr_I5": [],
      "if-pipe-expr_I1": [],
      "if-pipe-expr_I2_star": [
        "ε",
        "if-pipe-expr_I2",
        "if-pipe-branch"
      ],
      "if-pipe-expr_I3_opt": [
        "ε",
        "if-pipe-expr_I3"
      ],
      "if-pipe-expr_I2": [
        "if-pipe-branch"
      ],
      "if-pipe-branch": [],
      "if-pipe-expr_I3": [],
      "cases-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-binding_I0_opt": [
        "ε",
        "cases-binding_I0"
      ],
      "cases-binding_I0": [],
      "cases-args": [],
      "cases-args_I1_opt": [
        "ε",
        "cases-args_I1",
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1": [
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1_I1_star": [
        "ε",
        "cases-args_I1_I1"
      ],
      "cases-args_I1_I1": [],
      "cases-expr_I1": [],
      "cases-expr_I5": [],
      "cases-expr_I6_star": [
        "ε",
        "cases-expr_I6",
        "cases-branch"
      ],
      "cases-expr_I7_opt": [
        "ε",
        "cases-expr_I7"
      ],
      "cases-expr_I6": [
        "cases-branch"
      ],
      "cases-branch": [],
      "cases-expr_I7": [],
      "cases-branch_I2_opt": [
        "ε",
        "cases-branch_I2",
        "cases-args"
      ],
      "cases-branch_I2": [
        "cases-args"
      ],
      "for-bind": [],
      "for-expr_I3_opt": [
        "ε",
        "for-expr_I3",
        "for-bind"
      ],
      "for-expr_I6": [],
      "for-expr_I3": [
        "for-bind"
      ],
      "for-expr_I3_I1_star": [
        "ε",
        "for-expr_I3_I1"
      ],
      "for-expr_I3_I1": [],
      "column-order": [],
      "column-order_I1": [],
      "table-select_I2_star": [
        "ε",
        "table-select_I2"
      ],
      "table-select_I2": [],
      "table-filter_I2_opt": [
        "ε",
        "table-filter_I2"
      ],
      "table-filter_I2": [],
      "table-filter_I2_I2_star": [
        "ε",
        "table-filter_I2_I2"
      ],
      "table-filter_I2_I2": [],
      "table-order_I4_star": [
        "ε",
        "table-order_I4"
      ],
      "table-order_I4": [],
      "table-update_I2_opt": [
        "ε",
        "table-update_I2"
      ],
      "table-update_I2": [],
      "table-update_I2_I2_star": [
        "ε",
        "table-update_I2_I2"
      ],
      "table-update_I2_I2": [],
      "table-extend_I2_opt": [
        "ε",
        "table-extend_I2"
      ],
      "table-extend-fields": [
        "table-extend-field"
      ],
      "table-extend_I2": [],
      "table-extend_I2_I2_star": [
        "ε",
        "table-extend_I2_I2"
      ],
      "table-extend_I2_I2": [],
      "table-extend-fields_I0_star": [
        "ε",
        "table-extend-fields_I0",
        "list-table-extend-field"
      ],
      "table-extend-field": [],
      "table-extend-fields_I2_opt": [
        "ε",
        "table-extend-fields_I2"
      ],
      "table-extend-fields_I0": [
        "list-table-extend-field"
      ],
      "list-table-extend-field": [],
      "table-extend-fields_I2": [],
      "table-extend-field_A0_I1_opt": [
        "ε",
        "table-extend-field_A0_I1"
      ],
      "table-extend-field_A0_I1": [],
      "table-extend-field_A1_I1_opt": [
        "ε",
        "table-extend-field_A1_I1"
      ],
      "table-extend-field_A1_I1": [],
      "load-table-expr_I3_opt": [
        "ε",
        "load-table-expr_I3",
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-expr_I3": [
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-specs": [
        "load-table-spec"
      ],
      "load-table-specs_I0_star": [
        "ε",
        "load-table-specs_I0",
        "load-table-spec"
      ],
      "load-table-spec": [],
      "load-table-specs_I0": [
        "load-table-spec"
      ],
      "name-ann": [],
      "arrow-ann": [],
      "app-ann": [],
      "pred-ann": [],
      "dot-ann": [],
      "tuple-ann": [],
      "comma-ann-field": [
        "ann-field"
      ],
      "ann-field": [],
      "comma-ann-field_I1_star": [
        "ε",
        "comma-ann-field_I1"
      ],
      "comma-ann-field_I1": [],
      "trailing-opt-comma-ann-field": [
        "trailing-opt-comma-ann-field_I0",
        "ε",
        "comma-ann-field",
        "ann-field"
      ],
      "trailing-opt-comma-ann-field_I0": [
        "ε",
        "comma-ann-field",
        "ann-field"
      ],
      "trailing-opt-comma-ann-field_I0_A0_I1_opt": [
        "ε",
        "trailing-opt-comma-ann-field_I0_A0_I1"
      ],
      "trailing-opt-comma-ann-field_I0_A0_I1": [],
      "tuple-ann_I2_star": [
        "ε",
        "tuple-ann_I2"
      ],
      "tuple-ann_I3_opt": [
        "ε",
        "tuple-ann_I3"
      ],
      "tuple-ann_I2": [],
      "tuple-ann_I3": [],
      "noparen-arrow-ann_I0_opt": [
        "ε",
        "noparen-arrow-ann_I0",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann_I0": [
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "comma-anns": [
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I0": [],
      "arrow-ann_I1_opt": [
        "ε",
        "arrow-ann_I1",
        "comma-anns",
        "record-ann",
        "ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I1": [
        "comma-anns",
        "record-ann",
        "ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "app-ann_I0": [
        "name-ann",
        "dot-ann"
      ],
      "comma-anns_I1_star": [
        "ε",
        "comma-anns_I1"
      ],
      "comma-anns_I1": [],
      "pred-ann_I2": [],
      "START": [
        "program",
        "ε",
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ]
    },
    "rulesByOldId": {
      "0": {
        "name": "program",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "1": {
        "name": "prelude",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "2": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": []
      },
      "3": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "4": {
        "name": "prelude_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "5": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": []
      },
      "6": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "7": {
        "name": "prelude_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "8": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": []
      },
      "9": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "10": {
        "name": "prelude_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "11": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "12": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "13": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "14": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "15": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "16": {
        "name": "import-special",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "17": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": []
      },
      "18": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "19": {
        "name": "import-special_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "20": {
        "name": "import-name",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "21": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "22": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "23": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "24": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "25": {
        "name": "comma-names",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "26": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": []
      },
      "27": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "28": {
        "name": "comma-names_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29": {
        "name": "block",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "30": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": []
      },
      "31": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "32": {
        "name": "block_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "33": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "34": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "35": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "36": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "37": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "38": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "39": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "40": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "41": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "42": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "43": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "44": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "45": {
        "name": "type-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "46": {
        "name": "newtype-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "47": {
        "name": "let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "48": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "49": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "50": {
        "name": "tuple-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "51": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": []
      },
      "52": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "53": {
        "name": "tuple-binding_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "54": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": []
      },
      "55": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "56": {
        "name": "tuple-binding_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "57": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": []
      },
      "58": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "59": {
        "name": "tuple-binding_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "60": {
        "name": "name-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "61": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "62": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "63": {
        "name": "name-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "64": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": []
      },
      "65": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "66": {
        "name": "name-binding_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "67": {
        "name": "toplevel-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "68": {
        "name": "multi-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "69": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "70": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "71": {
        "name": "multi-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "72": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "73": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "74": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "75": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "76": {
        "name": "letrec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "77": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "78": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "79": {
        "name": "letrec-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "80": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "81": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "82": {
        "name": "type-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "83": {
        "name": "newtype-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "84": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "85": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "86": {
        "name": "type-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "87": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "88": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "89": {
        "name": "type-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "90": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "91": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "92": {
        "name": "contract-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "93": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "94": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "95": {
        "name": "fun-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "96": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "97": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "98": {
        "name": "fun-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "99": {
        "name": "ty-params",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "100": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": []
      },
      "101": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "102": {
        "name": "ty-params_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "103": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "104": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "105": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "106": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "107": {
        "name": "args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "108": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "109": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "110": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "111": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "112": {
        "name": "args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "113": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "114": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "115": {
        "name": "args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "116": {
        "name": "return-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "117": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "118": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "119": {
        "name": "return-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "120": {
        "name": "doc-string",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "121": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": []
      },
      "122": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "123": {
        "name": "doc-string_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "124": {
        "name": "where-clause",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "125": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": []
      },
      "126": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "127": {
        "name": "where-clause_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "128": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "129": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "130": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "131": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "132": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "133": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": []
      },
      "134": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "135": {
        "name": "check-test_A0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "136": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "137": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "138": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "139": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "140": {
        "name": "data-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "141": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": []
      },
      "142": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "143": {
        "name": "data-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "144": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": []
      },
      "145": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "146": {
        "name": "data-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "147": {
        "name": "variant-constructor",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "148": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "149": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "150": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "151": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "152": {
        "name": "variant-members",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "153": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": []
      },
      "154": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "155": {
        "name": "variant-members_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "156": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "157": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "158": {
        "name": "variant-members_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "159": {
        "name": "variant-member",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "160": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": []
      },
      "161": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "162": {
        "name": "variant-member_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "163": {
        "name": "data-with",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "164": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": []
      },
      "165": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "166": {
        "name": "data-with_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "167": {
        "name": "data-sharing",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "168": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": []
      },
      "169": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "170": {
        "name": "data-sharing_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "171": {
        "name": "var-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "172": {
        "name": "rec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "173": {
        "name": "assign-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "174": {
        "name": "when-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "175": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "176": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "177": {
        "name": "binop-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "178": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "179": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "180": {
        "name": "binop-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "181": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "182": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "183": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "184": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "185": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "186": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "187": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "188": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "189": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "190": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "191": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "192": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "193": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "194": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "195": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "196": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "197": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "198": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "199": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "200": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "201": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "202": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "203": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "204": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "205": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "206": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "207": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "208": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "209": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "210": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "211": {
        "name": "check-op-postfix",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "212": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "213": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "214": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "215": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "216": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "217": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "218": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "219": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "220": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "221": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "222": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "223": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "224": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "225": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "226": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "227": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "228": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "229": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "230": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "231": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "232": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "233": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "234": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "235": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "236": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "237": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "238": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "239": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "240": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "241": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "242": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "243": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "244": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "245": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "246": {
        "name": "template-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "247": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-STRING"
          }
        ]
      },
      "248": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-BLOCK-COMMENT"
          }
        ]
      },
      "249": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-OPER"
          }
        ]
      },
      "250": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-NUMBER"
          }
        ]
      },
      "251": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNKNOWN"
          }
        ]
      },
      "252": {
        "name": "paren-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "253": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "254": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "255": {
        "name": "id-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "256": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "257": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "258": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rfrac-expr"
          }
        ]
      },
      "259": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "260": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "261": {
        "name": "num-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "262": {
        "name": "frac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "263": {
        "name": "rfrac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROUGHRATIONAL"
          }
        ]
      },
      "264": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "265": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "266": {
        "name": "string-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "267": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "268": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "269": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "270": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "271": {
        "name": "method-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "272": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "273": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "274": {
        "name": "app-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "275": {
        "name": "app-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "276": {
        "name": "opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "277": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": []
      },
      "278": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "279": {
        "name": "opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          }
        ]
      },
      "280": {
        "name": "comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "281": {
        "name": "comma-binops_I1_star",
        "position": 0,
        "symbols": []
      },
      "282": {
        "name": "comma-binops_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1"
          }
        ]
      },
      "283": {
        "name": "comma-binops_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "284": {
        "name": "trailing-opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0"
          }
        ]
      },
      "285": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "286": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "287": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1"
          }
        ]
      },
      "288": {
        "name": "trailing-opt-comma-binops_I0_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "289": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 0,
        "symbols": []
      },
      "290": {
        "name": "inst-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "291": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": []
      },
      "292": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "293": {
        "name": "inst-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "294": {
        "name": "tuple-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "295": {
        "name": "tuple-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "296": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "297": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "298": {
        "name": "tuple-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "299": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "300": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "301": {
        "name": "tuple-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "302": {
        "name": "tuple-get",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "303": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "304": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "305": {
        "name": "obj-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "306": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "307": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "308": {
        "name": "obj-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "309": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "310": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "311": {
        "name": "obj-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "312": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "313": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "314": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": []
      },
      "315": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "316": {
        "name": "obj-field_A1_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "317": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "318": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "319": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "320": {
        "name": "fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "321": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "322": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "323": {
        "name": "fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "324": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "325": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "326": {
        "name": "fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "327": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "328": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "329": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "330": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "331": {
        "name": "key",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "332": {
        "name": "construct-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "333": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": []
      },
      "334": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "335": {
        "name": "table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "336": {
        "name": "table-headers",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "337": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": []
      },
      "338": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "339": {
        "name": "table-headers_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "340": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "341": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "342": {
        "name": "table-headers_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "343": {
        "name": "list-table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "344": {
        "name": "table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "345": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": []
      },
      "346": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "347": {
        "name": "table-header_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "348": {
        "name": "table-rows",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "349": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": []
      },
      "350": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "351": {
        "name": "table-rows_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "352": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "353": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "354": {
        "name": "table-rows_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "355": {
        "name": "table-row",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "356": {
        "name": "table-items",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "357": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": []
      },
      "358": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "359": {
        "name": "table-items_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "360": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "361": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "362": {
        "name": "table-items_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "363": {
        "name": "list-table-item",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "364": {
        "name": "reactor-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "365": {
        "name": "dot-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "366": {
        "name": "bracket-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "367": {
        "name": "get-bang-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "368": {
        "name": "extend-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "369": {
        "name": "update-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "370": {
        "name": "if-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "371": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "372": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "373": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": []
      },
      "374": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "375": {
        "name": "if-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "376": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": []
      },
      "377": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "378": {
        "name": "if-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "379": {
        "name": "else-if",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "380": {
        "name": "if-pipe-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "381": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "382": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "383": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "384": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "385": {
        "name": "if-pipe-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "386": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "387": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "388": {
        "name": "if-pipe-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "389": {
        "name": "if-pipe-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "390": {
        "name": "cases-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "391": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "392": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "393": {
        "name": "cases-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "394": {
        "name": "cases-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "395": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "396": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "397": {
        "name": "cases-args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "398": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "399": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "400": {
        "name": "cases-args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      },
      "401": {
        "name": "cases-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "402": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "403": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "404": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "405": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "406": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": []
      },
      "407": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "408": {
        "name": "cases-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "409": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": []
      },
      "410": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "411": {
        "name": "cases-expr_I7",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "412": {
        "name": "cases-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "413": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": []
      },
      "414": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "415": {
        "name": "cases-branch_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "416": {
        "name": "for-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "417": {
        "name": "for-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "418": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "419": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "420": {
        "name": "for-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "421": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": []
      },
      "422": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "423": {
        "name": "for-expr_I3_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "424": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "425": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "426": {
        "name": "column-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "427": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "428": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "429": {
        "name": "table-select",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "430": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": []
      },
      "431": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "432": {
        "name": "table-select_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "433": {
        "name": "table-filter",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "434": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": []
      },
      "435": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "436": {
        "name": "table-filter_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "437": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "438": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "439": {
        "name": "table-filter_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "440": {
        "name": "table-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "441": {
        "name": "table-order_I4_star",
        "position": 0,
        "symbols": []
      },
      "442": {
        "name": "table-order_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4"
          }
        ]
      },
      "443": {
        "name": "table-order_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          }
        ]
      },
      "444": {
        "name": "table-extract",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "445": {
        "name": "table-update",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "446": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": []
      },
      "447": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "448": {
        "name": "table-update_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "449": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "450": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "451": {
        "name": "table-update_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "452": {
        "name": "table-extend",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "453": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": []
      },
      "454": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "455": {
        "name": "table-extend_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "456": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "457": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "458": {
        "name": "table-extend_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "459": {
        "name": "table-extend-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "460": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": []
      },
      "461": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "462": {
        "name": "table-extend-fields_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "463": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "464": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "465": {
        "name": "table-extend-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "466": {
        "name": "list-table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "467": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "468": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "469": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "470": {
        "name": "table-extend-field_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "471": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "472": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": []
      },
      "473": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "474": {
        "name": "table-extend-field_A1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "475": {
        "name": "load-table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "476": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "477": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "478": {
        "name": "load-table-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "479": {
        "name": "load-table-specs",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "480": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": []
      },
      "481": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "482": {
        "name": "load-table-specs_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "483": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "484": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "485": {
        "name": "user-block-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "486": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "487": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "488": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "489": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "490": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "491": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "492": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "493": {
        "name": "name-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "494": {
        "name": "comma-ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "495": {
        "name": "comma-ann-field_I1_star",
        "position": 0,
        "symbols": []
      },
      "496": {
        "name": "comma-ann-field_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1"
          }
        ]
      },
      "497": {
        "name": "comma-ann-field_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "498": {
        "name": "trailing-opt-comma-ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0"
          }
        ]
      },
      "499": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "500": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "501": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1"
          }
        ]
      },
      "502": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "503": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 0,
        "symbols": []
      },
      "504": {
        "name": "record-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "505": {
        "name": "ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "506": {
        "name": "tuple-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "507": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": []
      },
      "508": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "509": {
        "name": "tuple-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "510": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": []
      },
      "511": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "512": {
        "name": "tuple-ann_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "513": {
        "name": "noparen-arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "514": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "515": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "516": {
        "name": "noparen-arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "517": {
        "name": "arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "518": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "519": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "520": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "521": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "522": {
        "name": "arrow-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "523": {
        "name": "app-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "524": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "525": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "526": {
        "name": "comma-anns",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "527": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": []
      },
      "528": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "529": {
        "name": "comma-anns_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "530": {
        "name": "pred-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "531": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "532": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "533": {
        "name": "dot-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "534": {
        "name": "START",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "program"
          }
        ]
      },
      "812": {
        "name": "program",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "901": {
        "name": "prelude",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "1170": {
        "name": "prelude_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "1217": {
        "name": "prelude_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "4518": {
        "name": "program",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "4520": {
        "name": "block",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "9173": {
        "name": "prelude",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "9307": {
        "name": "prelude_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "9353": {
        "name": "prelude_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "9538": {
        "name": "id-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "9578": {
        "name": "string-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "9663": {
        "name": "provide-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "9710": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "9712": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "9714": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "9716": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "9718": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "9720": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "9722": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "9724": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "9726": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "9728": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "9730": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "9732": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "9742": {
        "name": "check-test",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "10227": {
        "name": "toplevel-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "10229": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "10231": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "10578": {
        "name": "name-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "10580": {
        "name": "name-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "10582": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "10709": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "10785": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "10875": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "10911": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "10955": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "10999": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "11120": {
        "name": "binop-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "11543": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "11581": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "11619": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "11657": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "11695": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "11733": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "11771": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "11809": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "11847": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "11885": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "11923": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "11961": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "11999": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "12037": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "12075": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "12113": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "12151": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "12189": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "12227": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "12265": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "12303": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "12341": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "12379": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "12417": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "12455": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "12493": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "12531": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "12569": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "12607": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "12645": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "12683": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "12721": {
        "name": "template-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "12878": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "12916": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "12954": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rfrac-expr"
          }
        ]
      },
      "12992": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "13030": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "13068": {
        "name": "num-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "13106": {
        "name": "frac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "13144": {
        "name": "rfrac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROUGHRATIONAL"
          }
        ]
      },
      "13182": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "13220": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "14200": {
        "name": "block_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "14244": {
        "name": "block_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "18853": {
        "name": "prelude",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "19123": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "19169": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "19349": {
        "name": "provide-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "19501": {
        "name": "check-test",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "19503": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "19536": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "19569": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "19602": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "19635": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "19668": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "19701": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "19734": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "19767": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "19800": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "19833": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "19866": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "19899": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "19932": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "19965": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "19998": {
        "name": "check-op-postfix",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "20000": {
        "name": "key",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "20020": {
        "name": "tuple-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "20051": {
        "name": "obj-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "20231": {
        "name": "ty-params",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "20234": {
        "name": "ty-params_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "20242": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "20244": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "20447": {
        "name": "obj-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "20484": {
        "name": "name-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "20489": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "20493": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "20638": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "20642": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "21054": {
        "name": "binop-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "21602": {
        "name": "app-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "22277": {
        "name": "construct-modifier",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "22353": {
        "name": "table-headers",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "22356": {
        "name": "table-headers_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "22540": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "22543": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "22588": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "22593": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "23056": {
        "name": "prelude_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "23102": {
        "name": "prelude_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "23474": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "23479": {
        "name": "comma-ann-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "23532": {
        "name": "trailing-opt-comma-ann-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0"
          }
        ]
      },
      "23534": {
        "name": "name-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "23546": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "23552": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "23557": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "23559": {
        "name": "comma-anns",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "23607": {
        "name": "contract-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "23609": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "23611": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "23617": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "23618": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "23624": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "23629": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "23634": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "23639": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "23640": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "23646": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "23653": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "23655": {
        "name": "noparen-arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "23670": {
        "name": "assign-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "23679": {
        "name": "let-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "23683": {
        "name": "check-test_A0_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "23809": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "23814": {
        "name": "fun-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "23840": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "23845": {
        "name": "tuple-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "23878": {
        "name": "tuple-binding_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "23884": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "23930": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "24190": {
        "name": "comma-names",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "24222": {
        "name": "tuple-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "24260": {
        "name": "obj-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "24298": {
        "name": "obj-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "24311": {
        "name": "name-binding",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "24313": {
        "name": "name-binding_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "24462": {
        "name": "user-block-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "24864": {
        "name": "check-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "24875": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "24919": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "24967": {
        "name": "comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "25079": {
        "name": "opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "25081": {
        "name": "opt-comma-binops_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "25083": {
        "name": "opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          }
        ]
      },
      "25155": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "25187": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "25219": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "25251": {
        "name": "binop-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "25317": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "25349": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "25381": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "25413": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "25445": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "25477": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "25509": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "25541": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "25573": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "25605": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "25637": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "25669": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "25701": {
        "name": "dot-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "25940": {
        "name": "get-bang-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "26016": {
        "name": "paren-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "26098": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "26144": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "26304": {
        "name": "table-rows",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "26306": {
        "name": "table-rows_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "26315": {
        "name": "table-header",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "26328": {
        "name": "table-headers_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "26333": {
        "name": "table-headers_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "26335": {
        "name": "table-headers_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "26381": {
        "name": "fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "26387": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "26433": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "26769": {
        "name": "table-filter_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "26895": {
        "name": "table-update_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "26937": {
        "name": "table-extend_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "26993": {
        "name": "import-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "27040": {
        "name": "import-name",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "27131": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "27177": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "27325": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "27327": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "27329": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1"
          }
        ]
      },
      "27331": {
        "name": "comma-ann-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "27339": {
        "name": "record-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "27398": {
        "name": "comma-anns",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "27448": {
        "name": "arrow-ann_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "27455": {
        "name": "arrow-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "27465": {
        "name": "newtype-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "27467": {
        "name": "check-test",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "27469": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "27533": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "27565": {
        "name": "fun-header",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "27568": {
        "name": "return-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "27571": {
        "name": "return-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "27604": {
        "name": "args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "27622": {
        "name": "args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "27625": {
        "name": "tuple-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "27629": {
        "name": "tuple-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "27631": {
        "name": "tuple-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "27634": {
        "name": "tuple-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "27638": {
        "name": "tuple-binding_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "27639": {
        "name": "tuple-binding_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "27644": {
        "name": "tuple-binding_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "27690": {
        "name": "doc-string",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "27735": {
        "name": "doc-string_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "27825": {
        "name": "comma-names",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "27835": {
        "name": "ty-params_I0",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "27838": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "27841": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "27849": {
        "name": "obj-field_A1_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "27945": {
        "name": "obj-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "27949": {
        "name": "obj-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "27951": {
        "name": "obj-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "27954": {
        "name": "obj-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "27956": {
        "name": "obj-field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "27962": {
        "name": "name-binding_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "28017": {
        "name": "multi-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "28021": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "28065": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "28113": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "28157": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "28239": {
        "name": "letrec-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "28255": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "28299": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "28381": {
        "name": "type-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "28385": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "28431": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "28508": {
        "name": "var-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "28510": {
        "name": "rec-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "28514": {
        "name": "comma-binops",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "28521": {
        "name": "app-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "28603": {
        "name": "binop-expr_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "28717": {
        "name": "bracket-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "28915": {
        "name": "table-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "28953": {
        "name": "table-rows_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "28954": {
        "name": "table-rows_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "28957": {
        "name": "table-rows_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "28959": {
        "name": "table-row",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "29050": {
        "name": "table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "29054": {
        "name": "table-header_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "29058": {
        "name": "list-table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "29060": {
        "name": "reactor-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "29104": {
        "name": "fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "29504": {
        "name": "if-pipe-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "29507": {
        "name": "if-pipe-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "29510": {
        "name": "if-pipe-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "29558": {
        "name": "for-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "29602": {
        "name": "for-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "29645": {
        "name": "table-select_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "29686": {
        "name": "table-filter_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "29783": {
        "name": "table-update_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "29831": {
        "name": "table-extend_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "29916": {
        "name": "load-table-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "29918": {
        "name": "load-table-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "30075": {
        "name": "ann-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30081": {
        "name": "comma-ann-field_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1"
          }
        ]
      },
      "30084": {
        "name": "dot-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "30090": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "30092": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "30102": {
        "name": "comma-anns_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "30122": {
        "name": "noparen-arrow-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30137": {
        "name": "type-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30177": {
        "name": "return-ann_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30201": {
        "name": "args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "30208": {
        "name": "args",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "30212": {
        "name": "tuple-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "30215": {
        "name": "tuple-binding",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "30403": {
        "name": "doc-string_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "30452": {
        "name": "comma-names_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "30456": {
        "name": "obj-field_A1_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30461": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "30507": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "30556": {
        "name": "obj-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "30560": {
        "name": "multi-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "30602": {
        "name": "letrec-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "30644": {
        "name": "type-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30648": {
        "name": "newtype-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "30652": {
        "name": "type-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "30696": {
        "name": "check-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30698": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "30740": {
        "name": "data-expr_I4_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "30745": {
        "name": "data-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "30750": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "30755": {
        "name": "when-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30760": {
        "name": "comma-binops_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1"
          }
        ]
      },
      "30766": {
        "name": "inst-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "30804": {
        "name": "inst-expr_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "30807": {
        "name": "extend-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "30845": {
        "name": "tuple-get",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "30883": {
        "name": "update-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "31005": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "31048": {
        "name": "trailing-opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0"
          }
        ]
      },
      "31050": {
        "name": "table-row",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "31053": {
        "name": "table-items",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "31056": {
        "name": "table-items_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "31240": {
        "name": "table-header_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31348": {
        "name": "field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31352": {
        "name": "fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "31356": {
        "name": "fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "31358": {
        "name": "fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "31361": {
        "name": "fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "31492": {
        "name": "if-pipe-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "31503": {
        "name": "if-pipe-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31586": {
        "name": "for-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "31669": {
        "name": "table-select_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "31710": {
        "name": "table-filter_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "31717": {
        "name": "column-order",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "31720": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "31723": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "31769": {
        "name": "table-extract",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31807": {
        "name": "table-update_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "31858": {
        "name": "table-extend_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "31913": {
        "name": "load-table-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31951": {
        "name": "load-table-specs",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "31952": {
        "name": "load-table-specs_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "31956": {
        "name": "load-table-specs_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "32177": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "32223": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "32269": {
        "name": "comma-ann-field_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "32277": {
        "name": "comma-anns_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "32281": {
        "name": "tuple-ann_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "32290": {
        "name": "tuple-ann_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "32293": {
        "name": "tuple-ann_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "32300": {
        "name": "app-ann",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "32305": {
        "name": "check-test_A0_I2",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "32342": {
        "name": "args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "32347": {
        "name": "tuple-binding",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "32349": {
        "name": "tuple-binding_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "32389": {
        "name": "where-clause",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "32391": {
        "name": "where-clause_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "32393": {
        "name": "where-clause_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32395": {
        "name": "comma-names_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "32399": {
        "name": "obj-field",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "32405": {
        "name": "multi-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32443": {
        "name": "letrec-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32481": {
        "name": "type-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32541": {
        "name": "variant-constructor",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "32547": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "32552": {
        "name": "data-with",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "32557": {
        "name": "data-with_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "32603": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "32608": {
        "name": "comma-binops_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "32611": {
        "name": "inst-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "32693": {
        "name": "trailing-opt-comma-binops_I0_A0_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "32695": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "32697": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1"
          }
        ]
      },
      "32699": {
        "name": "construct-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "32739": {
        "name": "table-items_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "32844": {
        "name": "table-items_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "32876": {
        "name": "table-items_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "32921": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "32967": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "33016": {
        "name": "fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "33057": {
        "name": "if-expr_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "33061": {
        "name": "if-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "33065": {
        "name": "if-expr_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "33067": {
        "name": "if-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33073": {
        "name": "if-pipe-branch",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33079": {
        "name": "if-pipe-expr_I3",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33081": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "33084": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "33129": {
        "name": "for-bind",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33135": {
        "name": "for-expr_I3_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "33262": {
        "name": "table-select",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33300": {
        "name": "table-filter",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33341": {
        "name": "table-filter_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "33347": {
        "name": "table-order",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33385": {
        "name": "table-order_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4"
          }
        ]
      },
      "33391": {
        "name": "table-update_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "33394": {
        "name": "table-update",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33435": {
        "name": "table-extend_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "33438": {
        "name": "table-extend",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33488": {
        "name": "table-extend-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "33495": {
        "name": "table-extend-fields_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "33497": {
        "name": "table-extend-fields_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "33525": {
        "name": "load-table-spec",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "33720": {
        "name": "pred-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "33725": {
        "name": "tuple-ann_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33728": {
        "name": "tuple-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "33733": {
        "name": "arrow-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "33738": {
        "name": "args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "33741": {
        "name": "tuple-binding_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "33743": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "33781": {
        "name": "where-clause_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33794": {
        "name": "variant-members_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "33796": {
        "name": "variant-members_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "33805": {
        "name": "variant-member_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "33809": {
        "name": "variant-member_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "33813": {
        "name": "data-with_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "33835": {
        "name": "data-expr_I5_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "33840": {
        "name": "data-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "33855": {
        "name": "data-sharing",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "33858": {
        "name": "data-sharing_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "33864": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33902": {
        "name": "method-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33940": {
        "name": "list-table-item",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "33975": {
        "name": "if-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34013": {
        "name": "if-expr_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34019": {
        "name": "if-pipe-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34181": {
        "name": "for-expr_I3_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "34184": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "34228": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "34310": {
        "name": "table-filter_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34313": {
        "name": "table-order_I4",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          }
        ]
      },
      "34316": {
        "name": "table-update_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34319": {
        "name": "table-extend_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34329": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "34334": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "34336": {
        "name": "list-table-extend-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "34337": {
        "name": "table-extend-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "34340": {
        "name": "table-extend-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "34342": {
        "name": "table-extend-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "34366": {
        "name": "import-special",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34412": {
        "name": "import-special_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "34421": {
        "name": "fun-expr",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34423": {
        "name": "variant-members",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34429": {
        "name": "variant-members_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "34436": {
        "name": "variant-member",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34441": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "34446": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "34451": {
        "name": "data-sharing_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "34457": {
        "name": "else-if",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34504": {
        "name": "cases-expr_I6_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "34507": {
        "name": "cases-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "34510": {
        "name": "cases-expr_I7_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "34550": {
        "name": "table-extend-field_A0_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "34551": {
        "name": "table-extend-field_A1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "34640": {
        "name": "load-table-spec",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "34644": {
        "name": "import-special_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "34647": {
        "name": "obj-field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34653": {
        "name": "variant-members_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "34656": {
        "name": "data-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34658": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "34663": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "34671": {
        "name": "else-if",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34684": {
        "name": "cases-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34722": {
        "name": "for-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34760": {
        "name": "table-extend-field",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "34847": {
        "name": "variant-members_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "34850": {
        "name": "field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34869": {
        "name": "cases-branch_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "34874": {
        "name": "cases-branch_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "34876": {
        "name": "cases-expr_I7",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34890": {
        "name": "cases-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "34894": {
        "name": "cases-args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "34903": {
        "name": "cases-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "34909": {
        "name": "cases-args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "34911": {
        "name": "cases-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34914": {
        "name": "cases-expr_I7",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34916": {
        "name": "table-extend-field",
        "position": 6,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "34919": {
        "name": "cases-args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "34926": {
        "name": "cases-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34929": {
        "name": "cases-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34931": {
        "name": "cases-branch",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34937": {
        "name": "cases-args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "34940": {
        "name": "cases-args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      }
    },
    "actionsByOldId": {
      "0": "Rule.defaultAction",
      "1": "Rule.defaultAction",
      "2": "Rule.Inline",
      "3": "Rule.Inline",
      "4": "Rule.Inline",
      "5": "Rule.Inline",
      "6": "Rule.Inline",
      "7": "Rule.Inline",
      "8": "Rule.Inline",
      "9": "Rule.ListSnoc(\"prelude_I2_star\", \"prelude_I2\", true)",
      "10": "Rule.Inline",
      "11": "Rule.defaultAction",
      "12": "Rule.defaultAction",
      "13": "Rule.defaultAction",
      "14": "Rule.defaultAction",
      "15": "Rule.defaultAction",
      "16": "Rule.defaultAction",
      "17": "Rule.Inline",
      "18": "Rule.ListSnoc(\"import-special_I3_star\", \"import-special_I3\", true)",
      "19": "Rule.Inline",
      "20": "Rule.defaultAction",
      "21": "Rule.defaultAction",
      "22": "Rule.defaultAction",
      "23": "Rule.defaultAction",
      "24": "Rule.defaultAction",
      "25": "Rule.defaultAction",
      "26": "Rule.Inline",
      "27": "Rule.ListSnoc(\"comma-names_I1_star\", \"comma-names_I1\", true)",
      "28": "Rule.Inline",
      "29": "Rule.defaultAction",
      "30": "Rule.Inline",
      "31": "Rule.ListSnoc(\"block_I0_star\", \"block_I0\", true)",
      "32": "Rule.Inline",
      "33": "Rule.defaultAction",
      "34": "Rule.defaultAction",
      "35": "Rule.defaultAction",
      "36": "Rule.defaultAction",
      "37": "Rule.defaultAction",
      "38": "Rule.defaultAction",
      "39": "Rule.defaultAction",
      "40": "Rule.defaultAction",
      "41": "Rule.defaultAction",
      "42": "Rule.defaultAction",
      "43": "Rule.defaultAction",
      "44": "Rule.defaultAction",
      "45": "Rule.defaultAction",
      "46": "Rule.defaultAction",
      "47": "Rule.defaultAction",
      "48": "Rule.defaultAction",
      "49": "Rule.defaultAction",
      "50": "Rule.defaultAction",
      "51": "Rule.Inline",
      "52": "Rule.ListSnoc(\"tuple-binding_I1_star\", \"tuple-binding_I1\", true)",
      "53": "Rule.Inline",
      "54": "Rule.Inline",
      "55": "Rule.Inline",
      "56": "Rule.Inline",
      "57": "Rule.Inline",
      "58": "Rule.Inline",
      "59": "Rule.Inline",
      "60": "Rule.defaultAction",
      "61": "Rule.Inline",
      "62": "Rule.Inline",
      "63": "Rule.Inline",
      "64": "Rule.Inline",
      "65": "Rule.Inline",
      "66": "Rule.Inline",
      "67": "Rule.defaultAction",
      "68": "Rule.defaultAction",
      "69": "Rule.Inline",
      "70": "Rule.ListSnoc(\"multi-let-expr_I2_star\", \"multi-let-expr_I2\", true)",
      "71": "Rule.Inline",
      "72": "Rule.Inline",
      "73": "Rule.Inline",
      "74": "Rule.defaultAction",
      "75": "Rule.defaultAction",
      "76": "Rule.defaultAction",
      "77": "Rule.Inline",
      "78": "Rule.ListSnoc(\"letrec-expr_I2_star\", \"letrec-expr_I2\", true)",
      "79": "Rule.Inline",
      "80": "Rule.Inline",
      "81": "Rule.Inline",
      "82": "Rule.defaultAction",
      "83": "Rule.defaultAction",
      "84": "Rule.defaultAction",
      "85": "Rule.defaultAction",
      "86": "Rule.defaultAction",
      "87": "Rule.Inline",
      "88": "Rule.ListSnoc(\"type-let-expr_I2_star\", \"type-let-expr_I2\", true)",
      "89": "Rule.Inline",
      "90": "Rule.Inline",
      "91": "Rule.Inline",
      "92": "Rule.defaultAction",
      "93": "Rule.Inline",
      "94": "Rule.Inline",
      "95": "Rule.defaultAction",
      "96": "Rule.Inline",
      "97": "Rule.Inline",
      "98": "Rule.defaultAction",
      "99": "Rule.defaultAction",
      "100": "Rule.Inline",
      "101": "Rule.Inline",
      "102": "Rule.Inline",
      "103": "Rule.Inline",
      "104": "Rule.Inline",
      "105": "Rule.Inline",
      "106": "Rule.Inline",
      "107": "Rule.defaultAction",
      "108": "Rule.Inline",
      "109": "Rule.Inline",
      "110": "Rule.Inline",
      "111": "Rule.Inline",
      "112": "Rule.Inline",
      "113": "Rule.Inline",
      "114": "Rule.ListSnoc(\"args_I1_I1_star\", \"args_I1_I1\", true)",
      "115": "Rule.Inline",
      "116": "Rule.defaultAction",
      "117": "Rule.Inline",
      "118": "Rule.Inline",
      "119": "Rule.Inline",
      "120": "Rule.defaultAction",
      "121": "Rule.Inline",
      "122": "Rule.Inline",
      "123": "Rule.Inline",
      "124": "Rule.defaultAction",
      "125": "Rule.Inline",
      "126": "Rule.Inline",
      "127": "Rule.Inline",
      "128": "Rule.defaultAction",
      "129": "Rule.defaultAction",
      "130": "Rule.Inline",
      "131": "Rule.Inline",
      "132": "Rule.defaultAction",
      "133": "Rule.Inline",
      "134": "Rule.Inline",
      "135": "Rule.Inline",
      "136": "Rule.Inline",
      "137": "Rule.Inline",
      "138": "Rule.defaultAction",
      "139": "Rule.defaultAction",
      "140": "Rule.defaultAction",
      "141": "Rule.Inline",
      "142": "Rule.Inline",
      "143": "Rule.Inline",
      "144": "Rule.Inline",
      "145": "Rule.ListSnoc(\"data-expr_I5_star\", \"data-expr_I5\", true)",
      "146": "Rule.Inline",
      "147": "Rule.defaultAction",
      "148": "Rule.defaultAction",
      "149": "Rule.defaultAction",
      "150": "Rule.defaultAction",
      "151": "Rule.defaultAction",
      "152": "Rule.defaultAction",
      "153": "Rule.Inline",
      "154": "Rule.Inline",
      "155": "Rule.Inline",
      "156": "Rule.Inline",
      "157": "Rule.ListSnoc(\"variant-members_I1_I1_star\", \"variant-members_I1_I1\", true)",
      "158": "Rule.Inline",
      "159": "Rule.defaultAction",
      "160": "Rule.Inline",
      "161": "Rule.Inline",
      "162": "Rule.Inline",
      "163": "Rule.defaultAction",
      "164": "Rule.Inline",
      "165": "Rule.Inline",
      "166": "Rule.Inline",
      "167": "Rule.defaultAction",
      "168": "Rule.Inline",
      "169": "Rule.Inline",
      "170": "Rule.Inline",
      "171": "Rule.defaultAction",
      "172": "Rule.defaultAction",
      "173": "Rule.defaultAction",
      "174": "Rule.defaultAction",
      "175": "Rule.Inline",
      "176": "Rule.Inline",
      "177": "Rule.defaultAction",
      "178": "Rule.Inline",
      "179": "Rule.ListSnoc(\"binop-expr_I1_star\", \"binop-expr_I1\", true)",
      "180": "Rule.Inline",
      "181": "Rule.defaultAction",
      "182": "Rule.defaultAction",
      "183": "Rule.defaultAction",
      "184": "Rule.defaultAction",
      "185": "Rule.defaultAction",
      "186": "Rule.defaultAction",
      "187": "Rule.defaultAction",
      "188": "Rule.defaultAction",
      "189": "Rule.defaultAction",
      "190": "Rule.defaultAction",
      "191": "Rule.defaultAction",
      "192": "Rule.defaultAction",
      "193": "Rule.defaultAction",
      "194": "Rule.defaultAction",
      "195": "Rule.defaultAction",
      "196": "Rule.defaultAction",
      "197": "Rule.defaultAction",
      "198": "Rule.defaultAction",
      "199": "Rule.defaultAction",
      "200": "Rule.defaultAction",
      "201": "Rule.defaultAction",
      "202": "Rule.defaultAction",
      "203": "Rule.defaultAction",
      "204": "Rule.defaultAction",
      "205": "Rule.defaultAction",
      "206": "Rule.defaultAction",
      "207": "Rule.defaultAction",
      "208": "Rule.defaultAction",
      "209": "Rule.defaultAction",
      "210": "Rule.defaultAction",
      "211": "Rule.defaultAction",
      "212": "Rule.defaultAction",
      "213": "Rule.defaultAction",
      "214": "Rule.defaultAction",
      "215": "Rule.defaultAction",
      "216": "Rule.defaultAction",
      "217": "Rule.defaultAction",
      "218": "Rule.defaultAction",
      "219": "Rule.defaultAction",
      "220": "Rule.defaultAction",
      "221": "Rule.defaultAction",
      "222": "Rule.defaultAction",
      "223": "Rule.defaultAction",
      "224": "Rule.defaultAction",
      "225": "Rule.defaultAction",
      "226": "Rule.defaultAction",
      "227": "Rule.defaultAction",
      "228": "Rule.defaultAction",
      "229": "Rule.defaultAction",
      "230": "Rule.defaultAction",
      "231": "Rule.defaultAction",
      "232": "Rule.defaultAction",
      "233": "Rule.defaultAction",
      "234": "Rule.defaultAction",
      "235": "Rule.defaultAction",
      "236": "Rule.defaultAction",
      "237": "Rule.defaultAction",
      "238": "Rule.defaultAction",
      "239": "Rule.defaultAction",
      "240": "Rule.defaultAction",
      "241": "Rule.defaultAction",
      "242": "Rule.defaultAction",
      "243": "Rule.defaultAction",
      "244": "Rule.defaultAction",
      "245": "Rule.defaultAction",
      "246": "Rule.defaultAction",
      "247": "Rule.defaultAction",
      "248": "Rule.defaultAction",
      "249": "Rule.defaultAction",
      "250": "Rule.defaultAction",
      "251": "Rule.defaultAction",
      "252": "Rule.defaultAction",
      "253": "Rule.Inline",
      "254": "Rule.Inline",
      "255": "Rule.defaultAction",
      "256": "Rule.defaultAction",
      "257": "Rule.defaultAction",
      "258": "Rule.defaultAction",
      "259": "Rule.defaultAction",
      "260": "Rule.defaultAction",
      "261": "Rule.defaultAction",
      "262": "Rule.defaultAction",
      "263": "Rule.defaultAction",
      "264": "Rule.defaultAction",
      "265": "Rule.defaultAction",
      "266": "Rule.defaultAction",
      "267": "Rule.defaultAction",
      "268": "Rule.Inline",
      "269": "Rule.Inline",
      "270": "Rule.defaultAction",
      "271": "Rule.defaultAction",
      "272": "Rule.Inline",
      "273": "Rule.Inline",
      "274": "Rule.defaultAction",
      "275": "Rule.defaultAction",
      "276": "Rule.defaultAction",
      "277": "Rule.Inline",
      "278": "Rule.Inline",
      "279": "Rule.Inline",
      "280": "Rule.defaultAction",
      "281": "Rule.Inline",
      "282": "Rule.ListSnoc(\"comma-binops_I1_star\", \"comma-binops_I1\", true)",
      "283": "Rule.Inline",
      "284": "Rule.defaultAction",
      "285": "Rule.Inline",
      "286": "Rule.Inline",
      "287": "Rule.Inline",
      "288": "Rule.Inline",
      "289": "Rule.Inline",
      "290": "Rule.defaultAction",
      "291": "Rule.Inline",
      "292": "Rule.ListSnoc(\"inst-expr_I3_star\", \"inst-expr_I3\", true)",
      "293": "Rule.Inline",
      "294": "Rule.defaultAction",
      "295": "Rule.defaultAction",
      "296": "Rule.Inline",
      "297": "Rule.ListSnoc(\"tuple-fields_I1_star\", \"tuple-fields_I1\", true)",
      "298": "Rule.Inline",
      "299": "Rule.Inline",
      "300": "Rule.Inline",
      "301": "Rule.Inline",
      "302": "Rule.defaultAction",
      "303": "Rule.defaultAction",
      "304": "Rule.defaultAction",
      "305": "Rule.defaultAction",
      "306": "Rule.Inline",
      "307": "Rule.ListSnoc(\"obj-fields_I1_star\", \"obj-fields_I1\", true)",
      "308": "Rule.Inline",
      "309": "Rule.Inline",
      "310": "Rule.Inline",
      "311": "Rule.Inline",
      "312": "Rule.defaultAction",
      "313": "Rule.defaultAction",
      "314": "Rule.Inline",
      "315": "Rule.Inline",
      "316": "Rule.Inline",
      "317": "Rule.defaultAction",
      "318": "Rule.Inline",
      "319": "Rule.Inline",
      "320": "Rule.defaultAction",
      "321": "Rule.Inline",
      "322": "Rule.ListSnoc(\"fields_I1_star\", \"fields_I1\", true)",
      "323": "Rule.Inline",
      "324": "Rule.Inline",
      "325": "Rule.Inline",
      "326": "Rule.Inline",
      "327": "Rule.defaultAction",
      "328": "Rule.defaultAction",
      "329": "Rule.Inline",
      "330": "Rule.Inline",
      "331": "Rule.defaultAction",
      "332": "Rule.defaultAction",
      "333": "Rule.defaultAction",
      "334": "Rule.defaultAction",
      "335": "Rule.defaultAction",
      "336": "Rule.defaultAction",
      "337": "Rule.Inline",
      "338": "Rule.Inline",
      "339": "Rule.Inline",
      "340": "Rule.Inline",
      "341": "Rule.ListSnoc(\"table-headers_I0_I0_star\", \"table-headers_I0_I0\", true)",
      "342": "Rule.Inline",
      "343": "Rule.defaultAction",
      "344": "Rule.defaultAction",
      "345": "Rule.Inline",
      "346": "Rule.Inline",
      "347": "Rule.Inline",
      "348": "Rule.defaultAction",
      "349": "Rule.Inline",
      "350": "Rule.Inline",
      "351": "Rule.Inline",
      "352": "Rule.Inline",
      "353": "Rule.ListSnoc(\"table-rows_I0_I0_star\", \"table-rows_I0_I0\", true)",
      "354": "Rule.Inline",
      "355": "Rule.defaultAction",
      "356": "Rule.defaultAction",
      "357": "Rule.Inline",
      "358": "Rule.Inline",
      "359": "Rule.Inline",
      "360": "Rule.Inline",
      "361": "Rule.ListSnoc(\"table-items_I0_I0_star\", \"table-items_I0_I0\", true)",
      "362": "Rule.Inline",
      "363": "Rule.defaultAction",
      "364": "Rule.defaultAction",
      "365": "Rule.defaultAction",
      "366": "Rule.defaultAction",
      "367": "Rule.defaultAction",
      "368": "Rule.defaultAction",
      "369": "Rule.defaultAction",
      "370": "Rule.defaultAction",
      "371": "Rule.Inline",
      "372": "Rule.Inline",
      "373": "Rule.Inline",
      "374": "Rule.ListSnoc(\"if-expr_I4_star\", \"if-expr_I4\", true)",
      "375": "Rule.Inline",
      "376": "Rule.Inline",
      "377": "Rule.Inline",
      "378": "Rule.Inline",
      "379": "Rule.defaultAction",
      "380": "Rule.defaultAction",
      "381": "Rule.Inline",
      "382": "Rule.Inline",
      "383": "Rule.Inline",
      "384": "Rule.ListSnoc(\"if-pipe-expr_I2_star\", \"if-pipe-expr_I2\", true)",
      "385": "Rule.Inline",
      "386": "Rule.Inline",
      "387": "Rule.Inline",
      "388": "Rule.Inline",
      "389": "Rule.defaultAction",
      "390": "Rule.defaultAction",
      "391": "Rule.Inline",
      "392": "Rule.Inline",
      "393": "Rule.Inline",
      "394": "Rule.defaultAction",
      "395": "Rule.Inline",
      "396": "Rule.Inline",
      "397": "Rule.Inline",
      "398": "Rule.Inline",
      "399": "Rule.ListSnoc(\"cases-args_I1_I1_star\", \"cases-args_I1_I1\", true)",
      "400": "Rule.Inline",
      "401": "Rule.defaultAction",
      "402": "Rule.Inline",
      "403": "Rule.Inline",
      "404": "Rule.Inline",
      "405": "Rule.Inline",
      "406": "Rule.Inline",
      "407": "Rule.ListSnoc(\"cases-expr_I6_star\", \"cases-expr_I6\", true)",
      "408": "Rule.Inline",
      "409": "Rule.Inline",
      "410": "Rule.Inline",
      "411": "Rule.Inline",
      "412": "Rule.defaultAction",
      "413": "Rule.Inline",
      "414": "Rule.Inline",
      "415": "Rule.Inline",
      "416": "Rule.defaultAction",
      "417": "Rule.defaultAction",
      "418": "Rule.Inline",
      "419": "Rule.Inline",
      "420": "Rule.Inline",
      "421": "Rule.Inline",
      "422": "Rule.ListSnoc(\"for-expr_I3_I1_star\", \"for-expr_I3_I1\", true)",
      "423": "Rule.Inline",
      "424": "Rule.Inline",
      "425": "Rule.Inline",
      "426": "Rule.defaultAction",
      "427": "Rule.Inline",
      "428": "Rule.Inline",
      "429": "Rule.defaultAction",
      "430": "Rule.Inline",
      "431": "Rule.ListSnoc(\"table-select_I2_star\", \"table-select_I2\", true)",
      "432": "Rule.Inline",
      "433": "Rule.defaultAction",
      "434": "Rule.Inline",
      "435": "Rule.Inline",
      "436": "Rule.Inline",
      "437": "Rule.Inline",
      "438": "Rule.ListSnoc(\"table-filter_I2_I2_star\", \"table-filter_I2_I2\", true)",
      "439": "Rule.Inline",
      "440": "Rule.defaultAction",
      "441": "Rule.Inline",
      "442": "Rule.ListSnoc(\"table-order_I4_star\", \"table-order_I4\", true)",
      "443": "Rule.Inline",
      "444": "Rule.defaultAction",
      "445": "Rule.defaultAction",
      "446": "Rule.Inline",
      "447": "Rule.Inline",
      "448": "Rule.Inline",
      "449": "Rule.Inline",
      "450": "Rule.ListSnoc(\"table-update_I2_I2_star\", \"table-update_I2_I2\", true)",
      "451": "Rule.Inline",
      "452": "Rule.defaultAction",
      "453": "Rule.Inline",
      "454": "Rule.Inline",
      "455": "Rule.Inline",
      "456": "Rule.Inline",
      "457": "Rule.ListSnoc(\"table-extend_I2_I2_star\", \"table-extend_I2_I2\", true)",
      "458": "Rule.Inline",
      "459": "Rule.defaultAction",
      "460": "Rule.Inline",
      "461": "Rule.ListSnoc(\"table-extend-fields_I0_star\", \"table-extend-fields_I0\", true)",
      "462": "Rule.Inline",
      "463": "Rule.Inline",
      "464": "Rule.Inline",
      "465": "Rule.Inline",
      "466": "Rule.defaultAction",
      "467": "Rule.defaultAction",
      "468": "Rule.Inline",
      "469": "Rule.Inline",
      "470": "Rule.Inline",
      "471": "Rule.defaultAction",
      "472": "Rule.Inline",
      "473": "Rule.Inline",
      "474": "Rule.Inline",
      "475": "Rule.defaultAction",
      "476": "Rule.Inline",
      "477": "Rule.Inline",
      "478": "Rule.Inline",
      "479": "Rule.defaultAction",
      "480": "Rule.Inline",
      "481": "Rule.ListSnoc(\"load-table-specs_I0_star\", \"load-table-specs_I0\", true)",
      "482": "Rule.Inline",
      "483": "Rule.defaultAction",
      "484": "Rule.defaultAction",
      "485": "Rule.defaultAction",
      "486": "Rule.defaultAction",
      "487": "Rule.defaultAction",
      "488": "Rule.defaultAction",
      "489": "Rule.defaultAction",
      "490": "Rule.defaultAction",
      "491": "Rule.defaultAction",
      "492": "Rule.defaultAction",
      "493": "Rule.defaultAction",
      "494": "Rule.defaultAction",
      "495": "Rule.Inline",
      "496": "Rule.ListSnoc(\"comma-ann-field_I1_star\", \"comma-ann-field_I1\", true)",
      "497": "Rule.Inline",
      "498": "Rule.defaultAction",
      "499": "Rule.Inline",
      "500": "Rule.Inline",
      "501": "Rule.Inline",
      "502": "Rule.Inline",
      "503": "Rule.Inline",
      "504": "Rule.defaultAction",
      "505": "Rule.defaultAction",
      "506": "Rule.defaultAction",
      "507": "Rule.Inline",
      "508": "Rule.ListSnoc(\"tuple-ann_I2_star\", \"tuple-ann_I2\", true)",
      "509": "Rule.Inline",
      "510": "Rule.Inline",
      "511": "Rule.Inline",
      "512": "Rule.Inline",
      "513": "Rule.defaultAction",
      "514": "Rule.Inline",
      "515": "Rule.Inline",
      "516": "Rule.Inline",
      "517": "Rule.defaultAction",
      "518": "Rule.Inline",
      "519": "Rule.Inline",
      "520": "Rule.Inline",
      "521": "Rule.Inline",
      "522": "Rule.Inline",
      "523": "Rule.defaultAction",
      "524": "Rule.Inline",
      "525": "Rule.Inline",
      "526": "Rule.defaultAction",
      "527": "Rule.Inline",
      "528": "Rule.ListSnoc(\"comma-anns_I1_star\", \"comma-anns_I1\", true)",
      "529": "Rule.Inline",
      "530": "Rule.defaultAction",
      "531": "Rule.Inline",
      "532": "Rule.Inline",
      "533": "Rule.defaultAction",
      "534": "Rule.defaultAction"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      138,
      139,
      133,
      134,
      135,
      136,
      137,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      264,
      265,
      266,
      267,
      270,
      268,
      269,
      268,
      269,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      284,
      285,
      289,
      286,
      287,
      288,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      303,
      304,
      305,
      306,
      307,
      308,
      309,
      310,
      311,
      312,
      313,
      317,
      314,
      315,
      316,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420,
      421,
      422,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      454,
      455,
      456,
      457,
      458,
      459,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      471,
      468,
      469,
      470,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      481,
      482,
      483,
      484,
      485,
      486,
      487,
      488,
      489,
      490,
      491,
      492,
      493,
      494,
      495,
      496,
      497,
      498,
      499,
      503,
      500,
      501,
      502,
      504,
      505,
      506,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      514,
      515,
      516,
      517,
      518,
      519,
      520,
      521,
      522,
      523,
      524,
      525,
      526,
      527,
      528,
      529,
      530,
      531,
      532,
      533,
      534
    ],
    "rnTable": [
      {
        "program": {
          "push": 1
        },
        "prelude": {
          "push": 2
        },
        "prelude_I0_opt": {
          "push": 3
        },
        "prelude_I0": {
          "push": 4
        },
        "provide-stmt": {
          "push": 5
        },
        "'PROVIDE": {
          "push": 6
        },
        "$": {
          "reductions": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        }
      },
      {
        "$": {
          "accept": true
        }
      },
      {
        "block": {
          "push": 7
        },
        "block_I0_star": {
          "push": 8
        },
        "$": {
          "reductions": [
            [
              812,
              8
            ],
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "prelude_I1_opt": {
          "push": 9
        },
        "prelude_I1": {
          "push": 10
        },
        "provide-types-stmt": {
          "push": 11
        },
        "'PROVIDE-TYPES": {
          "push": 12
        },
        "$": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              901,
              100
            ],
            [
              5,
              4
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1170,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1217,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              61,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 15
        },
        "'STAR": {
          "push": 16
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 36
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'FUN": {
          "push": 47
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'CHECK": {
          "push": 49
        },
        "check-expr_I0": {
          "push": 50
        },
        "'CHECKCOLON": {
          "push": 51
        },
        "'EXAMPLESCOLON": {
          "push": 52
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'DATA": {
          "push": 54
        },
        "'VAR": {
          "push": 55
        },
        "'REC": {
          "push": 56
        },
        "'WHEN": {
          "push": 57
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "rfrac-expr": {
          "push": 94
        },
        "bool-expr": {
          "push": 95
        },
        "string-expr": {
          "push": 96
        },
        "'NUMBER": {
          "push": 97
        },
        "'RATIONAL": {
          "push": 98
        },
        "'ROUGHRATIONAL": {
          "push": 99
        },
        "'TRUE": {
          "push": 100
        },
        "'FALSE": {
          "push": 101
        },
        "'LAM": {
          "push": 102
        },
        "'METHOD": {
          "push": 103
        },
        "'LBRACK": {
          "push": 104
        },
        "'TABLE": {
          "push": 105
        },
        "'REACTOR": {
          "push": 106
        },
        "'IF": {
          "push": 107
        },
        "'ASK": {
          "push": 108
        },
        "'CASES": {
          "push": 109
        },
        "'FOR": {
          "push": 110
        },
        "'TABLE-SELECT": {
          "push": 111
        },
        "'TABLE-FILTER": {
          "push": 112
        },
        "'TABLE-ORDER": {
          "push": 113
        },
        "'TABLE-EXTRACT": {
          "push": 114
        },
        "'TABLE-UPDATE": {
          "push": 115
        },
        "'TABLE-EXTEND": {
          "push": 116
        },
        "'LOAD-TABLE": {
          "push": 117
        }
      },
      {
        "$": {
          "reductions": [
            [
              4518,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              61,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 118
        },
        "block_I0": {
          "push": 119
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 36
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'FUN": {
          "push": 47
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'CHECK": {
          "push": 49
        },
        "check-expr_I0": {
          "push": 50
        },
        "'CHECKCOLON": {
          "push": 51
        },
        "'EXAMPLESCOLON": {
          "push": 52
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'DATA": {
          "push": 54
        },
        "'VAR": {
          "push": 55
        },
        "'REC": {
          "push": 56
        },
        "'WHEN": {
          "push": 57
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "rfrac-expr": {
          "push": 94
        },
        "bool-expr": {
          "push": 95
        },
        "string-expr": {
          "push": 96
        },
        "'NUMBER": {
          "push": 97
        },
        "'RATIONAL": {
          "push": 98
        },
        "'ROUGHRATIONAL": {
          "push": 99
        },
        "'TRUE": {
          "push": 100
        },
        "'FALSE": {
          "push": 101
        },
        "'LAM": {
          "push": 102
        },
        "'METHOD": {
          "push": 103
        },
        "'LBRACK": {
          "push": 104
        },
        "'TABLE": {
          "push": 105
        },
        "'REACTOR": {
          "push": 106
        },
        "'IF": {
          "push": 107
        },
        "'ASK": {
          "push": 108
        },
        "'CASES": {
          "push": 109
        },
        "'FOR": {
          "push": 110
        },
        "'TABLE-SELECT": {
          "push": 111
        },
        "'TABLE-FILTER": {
          "push": 112
        },
        "'TABLE-ORDER": {
          "push": 113
        },
        "'TABLE-EXTRACT": {
          "push": 114
        },
        "'TABLE-UPDATE": {
          "push": 115
        },
        "'TABLE-EXTEND": {
          "push": 116
        },
        "'LOAD-TABLE": {
          "push": 117
        },
        "$": {
          "reductions": [
            [
              4520,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              4520,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              4520,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              4520,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              4520,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              4520,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              4520,
              0
            ]
          ]
        }
      },
      {
        "prelude_I2_star": {
          "push": 120
        },
        "$": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9173,
              5
            ],
            [
              8,
              5
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9307,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9353,
              0
            ]
          ]
        }
      },
      {
        "'STAR": {
          "push": 121
        },
        "record-ann": {
          "push": 122
        },
        "'LBRACE": {
          "push": 123
        }
      },
      {
        "'COLONCOLON": {
          "push": 124
        },
        "'COLONEQUALS": {
          "push": 125
        },
        "$": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9538,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              9578,
              0
            ]
          ]
        }
      },
      {
        "'END": {
          "push": 126
        }
      },
      {
        "$": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9663,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9710,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9712,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9714,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9716,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9718,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9720,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9722,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9724,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9726,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9728,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9730,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9732,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 127
        }
      },
      {
        "'NAME": {
          "push": 128
        }
      },
      {
        "'EQUALS": {
          "push": 129
        }
      },
      {
        "check-op": {
          "push": 130
        },
        "check-op-postfix": {
          "push": 131
        },
        "'IS": {
          "push": 132
        },
        "'ISEQUALEQUAL": {
          "push": 133
        },
        "'ISEQUALTILDE": {
          "push": 134
        },
        "'ISSPACESHIP": {
          "push": 135
        },
        "'ISROUGHLY": {
          "push": 136
        },
        "'ISNOT": {
          "push": 137
        },
        "'ISNOTEQUALEQUAL": {
          "push": 138
        },
        "'ISNOTEQUALTILDE": {
          "push": 139
        },
        "'ISNOTSPACESHIP": {
          "push": 140
        },
        "'RAISES": {
          "push": 141
        },
        "'RAISESOTHER": {
          "push": 142
        },
        "'SATISFIES": {
          "push": 143
        },
        "'SATISFIESNOT": {
          "push": 144
        },
        "'RAISESSATISFIES": {
          "push": 145
        },
        "'RAISESVIOLATES": {
          "push": 146
        },
        "'RAISESNOT": {
          "push": 147
        },
        "$": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9742,
              0
            ]
          ]
        }
      },
      {
        "'EQUALS": {
          "reductions": [
            [
              10227,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              10229,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10229,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10229,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              10229,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10229,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10229,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10229,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              10231,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10231,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10231,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              10231,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10231,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10231,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10231,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 148,
          "reductions": [
            [
              51,
              10
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "ty-params": {
          "push": 149
        },
        "binop-expr": {
          "push": 150
        },
        "'LBRACE": {
          "push": 151,
          "reductions": [
            [
              51,
              10
            ]
          ]
        },
        "tuple-binding_I1_star": {
          "push": 152
        },
        "'RBRACE": {
          "push": 153
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "fun-header": {
          "push": 154
        },
        "ty-params_I0_opt": {
          "push": 155
        },
        "ty-params_I0": {
          "push": 156
        },
        "ty-params_I0_I0": {
          "push": 157
        },
        "'LANGLE": {
          "push": 158
        },
        "'LT": {
          "push": 159
        },
        "'PARENAFTERBRACE": {
          "push": 48,
          "reductions": [
            [
              99,
              18
            ],
            [
              100,
              19
            ]
          ]
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'REF": {
          "push": 160
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "rfrac-expr": {
          "push": 94
        },
        "bool-expr": {
          "push": 95
        },
        "string-expr": {
          "push": 96
        },
        "'NUMBER": {
          "push": 97
        },
        "'RATIONAL": {
          "push": 98
        },
        "'ROUGHRATIONAL": {
          "push": 99
        },
        "'TRUE": {
          "push": 100
        },
        "'FALSE": {
          "push": 101
        },
        "'LAM": {
          "push": 102
        },
        "'METHOD": {
          "push": 161
        },
        "tuple-fields": {
          "push": 162
        },
        "obj-fields": {
          "push": 163
        },
        "obj-field": {
          "push": 164
        },
        "key": {
          "push": 165
        },
        "'LBRACK": {
          "push": 104
        },
        "'TABLE": {
          "push": 105
        },
        "'REACTOR": {
          "push": 106
        },
        "'IF": {
          "push": 107
        },
        "'ASK": {
          "push": 108
        },
        "'CASES": {
          "push": 109
        },
        "'FOR": {
          "push": 110
        },
        "'TABLE-SELECT": {
          "push": 111
        },
        "'TABLE-FILTER": {
          "push": 112
        },
        "'TABLE-ORDER": {
          "push": 113
        },
        "'TABLE-EXTRACT": {
          "push": 114
        },
        "'TABLE-UPDATE": {
          "push": 115
        },
        "'TABLE-EXTEND": {
          "push": 116
        },
        "'LOAD-TABLE": {
          "push": 117
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              99,
              18
            ],
            [
              100,
              19
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              51,
              10
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 166
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10578,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10580,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10582,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 167
        },
        "var-expr": {
          "push": 168
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 169
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "let-binding": {
          "push": 170
        },
        "'VAR": {
          "push": 55
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "block": {
          "push": 171
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10709,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 172
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 169
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10785,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 173
        },
        "'NEWTYPE": {
          "push": 174
        },
        "type-bind": {
          "push": 175
        },
        "newtype-bind": {
          "push": 176
        },
        "type-let-bind": {
          "push": 177
        }
      },
      {
        "'NAME": {
          "push": 178
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10875,
              0
            ]
          ]
        }
      },
      {
        "'STRING": {
          "push": 179
        }
      },
      {
        "block": {
          "push": 180
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10911,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10955,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10999,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 181
        }
      },
      {
        "toplevel-binding": {
          "push": 182
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 169
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "toplevel-binding": {
          "push": 183
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 169
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 184
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 185
        },
        "'LBRACE": {
          "push": 151
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'PARENSPACE": {
          "push": 53
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "rfrac-expr": {
          "push": 94
        },
        "bool-expr": {
          "push": 95
        },
        "string-expr": {
          "push": 96
        },
        "'NUMBER": {
          "push": 97
        },
        "'RATIONAL": {
          "push": 98
        },
        "'ROUGHRATIONAL": {
          "push": 99
        },
        "'TRUE": {
          "push": 100
        },
        "'FALSE": {
          "push": 101
        },
        "'LAM": {
          "push": 102
        },
        "'METHOD": {
          "push": 103
        },
        "'LBRACK": {
          "push": 104
        },
        "'TABLE": {
          "push": 105
        },
        "'REACTOR": {
          "push": 106
        },
        "'IF": {
          "push": 107
        },
        "'ASK": {
          "push": 108
        },
        "'CASES": {
          "push": 109
        },
        "'FOR": {
          "push": 110
        },
        "'TABLE-SELECT": {
          "push": 111
        },
        "'TABLE-FILTER": {
          "push": 112
        },
        "'TABLE-ORDER": {
          "push": 113
        },
        "'TABLE-EXTRACT": {
          "push": 114
        },
        "'TABLE-UPDATE": {
          "push": 115
        },
        "'TABLE-EXTEND": {
          "push": 116
        },
        "'LOAD-TABLE": {
          "push": 117
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 186
        },
        "'LANGLE": {
          "push": 187
        },
        "binop-expr_I1_star": {
          "push": 188
        },
        "app-args": {
          "push": 189
        },
        "'DOT": {
          "push": 190
        },
        "'LBRACK": {
          "push": 191,
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BANG": {
          "push": 192
        },
        "$": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11120,
              38
            ],
            [
              178,
              38
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11543,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11581,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11619,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11695,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11733,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11771,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11809,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11847,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11885,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11923,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11961,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11999,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12037,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12075,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12113,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12151,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12189,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12227,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12265,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12303,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12341,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12379,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12417,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12455,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12493,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12531,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12569,
              0
            ]
          ]
        },
        "'LBRACK": {
      {